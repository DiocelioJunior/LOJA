window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        fetch('data/products.json')
            .then(response => response.json())
            .then(products => {
                const product = products.find(p => p.id === productId);
                const colorsContainer = document.getElementById("colors");
                const sizesContainer = document.getElementById("sizes");

                if (product) {
                    document.getElementById('image-container').style.backgroundImage = `url(${product.image})`;
                    document.getElementById('product-name').textContent = product.name;
                    document.getElementById('product-price').textContent = `R$ ${product.price.toFixed(2)}`;
                    document.getElementById('product-description').textContent = product.description;
                    document.getElementById('off-price').textContent = `${product.off}% OFF`;

                    colorsContainer.innerHTML = '';
                    sizesContainer.innerHTML = '';

                    let selectedColor = null;
                    Object.values(product.colors).forEach(color => {
                        const colorIcon = document.createElement('div');
                        colorIcon.classList.add('color-icon');
                        colorIcon.style.backgroundColor = color;

                        colorIcon.addEventListener('click', () => {
                            document.querySelectorAll('.color-icon').forEach(icon => {
                                icon.classList.remove('selected');
                            });
                            colorIcon.classList.add('selected');
                            selectedColor = color;
                        });

                        colorsContainer.appendChild(colorIcon);
                    });

                    let selectedSize = null;
                    product.sizes.forEach(size => {
                        const sizeButton = document.createElement('button');
                        sizeButton.classList.add('size-button');
                        sizeButton.textContent = size;

                        sizeButton.addEventListener('click', () => {
                            document.querySelectorAll('.size-button').forEach(button => {
                                button.classList.remove('selected');
                            });
                            sizeButton.classList.add('selected');
                            selectedSize = size;
                        });

                        sizesContainer.appendChild(sizeButton);
                    });

                    // Função para verificar as configurações e validar cor/tamanho
                    function verificarConfiguracoesEAdicionar() {
                        fetch('data/settings.json')
                            .then(response => response.json())
                            .then(settings => {
                                const displayColorsConfig = settings.displayColors;
                                const displaySizeConfig = settings.displaySizes;

                                if (displayColorsConfig && !selectedColor) {
                                    alert('Por favor, selecione uma cor antes de adicionar ao carrinho.');
                                    return;
                                }

                                if (displaySizeConfig && !selectedSize) {
                                    alert('Por favor, selecione um tamanho antes de adicionar ao carrinho.');
                                    return;
                                }

                                adicionarAoCarrinho(); // Apenas adiciona ao carrinho após validação
                            })
                            .catch(error => console.error('Erro ao carregar as configurações:', error));
                    }

                    // Função que efetivamente adiciona o produto ao carrinho
                    function adicionarAoCarrinho() {
                        const selectedQuantity = document.querySelector('.qnt').value;

                        const cartProduct = {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            description: product.description,
                            quantity: selectedQuantity,
                            color: selectedColor,
                            size: selectedSize,
                            image: product.image,
                        };

                        let cart = JSON.parse(localStorage.getItem('cart')) || [];
                        cart.push(cartProduct);
                        localStorage.setItem('cart', JSON.stringify(cart));

                        alert('Produto adicionado ao carrinho com sucesso!');
                    }

                    // Aciona a verificação e adição ao clicar no botão de adicionar ao carrinho
                    const addToCartButton = document.querySelector('.btn');
                    addToCartButton.addEventListener('click', verificarConfiguracoesEAdicionar);

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
});
