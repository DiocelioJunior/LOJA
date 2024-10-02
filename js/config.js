
document.addEventListener('DOMContentLoaded', () => {
    fetch('data/settings.json')
        .then(response => response.json())  // Converte a resposta para JSON
        .then(settings => {
            const logo = document.getElementById("logo");
            const categoryTxt = document.getElementById("category-txt");
            const productsTxt = document.getElementById("products-txt");
            const name = document.getElementById("name");
            const container = document.getElementById("container");
            const containerProducts = document.getElementById("container-products");
            const icons = document.getElementById("icons");
            const banner = document.getElementById("banner-container");
            const bannerTxt = document.getElementById("banner-txt");
            const bannerTxt2 = document.getElementById("banner-txt2");
            const buttons = document.getElementsByClassName("btn");
            const colorsDisplay = document.getElementById("colors");
            const sizeDisplay = document.getElementById("sizes");
            const bannerTxtContainer = document.getElementById("txtBanner");


            const font = settings.font;
            const displayColors = settings.displayColors;
            const displaySizes = settings.displaySizes;
            const bannerStyle = settings.banner.bannerStyle;

            // Configura o logo
            if (logo) logo.src = `./assets/img/logo/${settings.logo}`;;

            // Configura o banner
            if (banner) banner.style.backgroundImage = `url('./assets/img/banner/${settings.banner.bannerImg}')`;

            // Configura o texto do banner
            if (bannerTxt) {
                bannerTxt.style.color = settings.banner.bannerTxtColor;
                bannerTxt.innerText = settings.banner.bannerTxt;
            }

            if (bannerTxt2) {
                bannerTxt2.style.color = settings.banner.bannerTxtColor;
                bannerTxt2.innerText = settings.banner.bannerTxt2;
            }

            // Ajusta o estilo do texto do banner
            if (bannerTxtContainer) {
                if (bannerStyle === "right") {
                    bannerTxtContainer.style.alignItems = "flex-end";
                } else if (bannerStyle === "left") {
                    bannerTxtContainer.style.alignItems = "flex-start";
                } else if (bannerStyle === "center") {
                    bannerTxtContainer.style.alignItems = "center";
                }
            }

            // Configura o nome do site
            if (name) {
                name.innerText = settings.siteName;
                name.style.color = settings.theme.nameSiteColor;
            }

            // Configura o texto das categorias e produtos
            if (categoryTxt) categoryTxt.style.color = settings.theme.txtSiteColor;
            if (productsTxt) productsTxt.style.color = settings.theme.txtSiteColor;

            // Configura o background dos containers
            if (container) container.style.backgroundColor = settings.theme.backgroundColor;
            if (containerProducts) containerProducts.style.backgroundColor = settings.theme.backgroundColor;

            // Configura a cor dos ícones
            if (icons) icons.style.color = settings.theme.iconsColor;

            // Configura a exibição das cores e tamanhos
            if (!displayColors && colorsDisplay) {
                colorsDisplay.style.display = "none";
            }

            if (!displaySizes && sizeDisplay) {
                sizeDisplay.style.display = "none";
            }

            // Configura a cor dos botões
            Array.from(buttons).forEach(button => {
                button.style.backgroundColor = settings.theme.buttonColor;
                button.style.color = settings.theme.buttonColorTxt;
            });

            // Configura a fonte
            const fontMapping = {
                "Sora": "Sora, sans-serif",
                "Suse": "SUSE, sans-serif",
                "Montserrat": "Montserrat, sans-serif"
            };

            if (container) container.style.fontFamily = fontMapping[font] || "sans-serif";
            if (containerProducts) containerProducts.style.fontFamily = fontMapping[font] || "sans-serif";

            document.body.style.backgroundColor = settings.theme.backgroundColor; // 
        })
        .catch(error => {
            console.error('Erro ao carregar o JSON:', error);  // Exibe erros, se houver
        });
});
