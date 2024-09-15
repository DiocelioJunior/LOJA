document.addEventListener('DOMContentLoaded', () => {
    fetch('data/settings.json')
        .then(response => response.json())  // Converte a resposta para JSON
        .then(settings => {
            const logo = document.getElementById("logo");
            const name = document.getElementById("name");
            const container = document.getElementById("container");
            const containerProducts = document.getElementById("container-products");
            const icons = document.getElementById("icons");
            const banner = document.getElementById("banner-container");
            const bannerTxt = document.getElementById("banner-txt");
            
            const font = settings.font;

            if (logo) logo.src = settings.logo;
            if (banner) banner.style.backgroundImage = `url('${settings.banner.bannerImg}')`;
            if (bannerTxt) bannerTxt.style.color = settings.theme.bannerTxtColor;
            if (name) name.innerText = settings.siteName;
            if (name) name.style.color = settings.theme.nameSiteColor;
            if (container) container.style.backgroundColor = settings.theme.backgroundColor;
            if (containerProducts) containerProducts.style.backgroundColor = settings.theme.backgroundColor;
            if (icons) icons.style.color = settings.theme.iconsColor;

            const fontMapping = {
                "Sora": "Sora, sans-serif",
                "Suse": "SUSE, sans-serif",
                "Montserrat": "Montserrat, sans-serif"
            };

            if (container) container.style.fontFamily = fontMapping[font] || "sans-serif";
            if (containerProducts) containerProducts.style.fontFamily = fontMapping[font] || "sans-serif";
        })
        .catch(error => {
            console.error('Erro ao carregar o JSON:', error);  // Exibe erros, se houver
        });
});
