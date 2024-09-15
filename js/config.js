window.addEventListener("load", (event) => {
    fetch('data/settings.json')
        .then(response => response.json())  // Converte a resposta para JSON
        .then(settings => {
            const logo = document.getElementById("logo");
            const name = document.getElementById("name");
            const container = document.getElementById("container");
            const icons = document.getElementById("icons");
            const banner = document.getElementById("banner-container");
            const bannerTxt = document.getElementById("banner-txt");
            
            const font = settings.font;
            const bannerDisplay = settings.banner.bannerDisplay

            logo.src = settings.logo ;
            banner.style.backgroundImage = `url('${settings.banner.bannerImg}')`;
            bannerTxt.style.color = settings.theme.bannerTxtColor;
            name.innerText= settings.siteName;
            name.style.color = settings.theme.nameSiteColor;
            container.style.backgroundColor = settings.theme.backgroundColor;
            icons.style.color = settings.theme.iconsColor;

            if (font === "Sora") {
                container.style.fontFamily = "Sora", sans-serif;
                containerProducts.style.fontFamily = "Sora", sans-serif;
            } else if (font === "Suse") {
                container.style.fontFamily = "SUSE", sans-serif;
            } else if (font === "Montserrat" ){
                container.style.fontFamily = "Montserrat", sans-serif;
            }

        })
        .catch(error => {
            console.error('Erro ao carregar o JSON:', error);  // Exibe erros, se houver
        });
});


