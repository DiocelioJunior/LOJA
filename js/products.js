window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        fetch('data/products.json')
            .then(response => response.json())
            .then(products => {
                const product = products.find(p => p.id === productId);
                const colorsContainer = document.getElementById("colors");

                if (product) {
                    // Define a imagem de fundo do container
                    document.getElementById('image-container').style.backgroundImage = `url(${product.image})`;
                    // Preenche o nome, preço e descrição do produto
                    document.getElementById('product-name').textContent = product.name;
                    document.getElementById('product-price').textContent = `R$ ${product.price.toFixed(2)}`;
                    document.getElementById('product-description').textContent = product.description;
                    document.getElementById('off-price').textContent = `${product.off}`;

                    // Limpa o container de cores antes de adicionar novas
                    colorsContainer.innerHTML = '';

                    // Exibe as cores do produto
                    Object.values(product.colors).forEach(color => {
                        colorsContainer.innerHTML += `
                            <div class="color-icon" style="background-color: ${color};">
                        
                            </div>
                        `;
                    });

                } else {
                    console.error('Produto não encontrado');
                }
            })
            .catch(error => {
                console.error('Erro ao carregar os detalhes do produto:', error);
            });
    } else {
        console.error('ID do produto não fornecido');
    }

    // Botão para voltar à página anterior
    document.getElementById('back-button').addEventListener('click', () => {
        window.history.back();
    });
});
