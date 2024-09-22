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
                    let selectedColor = null; // Variável para armazenar a cor selecionada

                    Object.values(product.colors).forEach(color => {
                        const colorIcon = document.createElement('div');
                        colorIcon.classList.add('color-icon');
                        colorIcon.style.backgroundColor = color;
                        
                        // Evento para selecionar a cor
                        colorIcon.addEventListener('click', () => {
                            // Remove a seleção anterior
                            document.querySelectorAll('.color-icon').forEach(icon => {
                                icon.classList.remove('selected');
                            });
                            // Adiciona a classe selecionada
                            colorIcon.classList.add('selected');
                            // Salva a cor selecionada
                            selectedColor = color;
                        });

                        // Adiciona o ícone de cor ao container
                        colorsContainer.appendChild(colorIcon);
                    });

                    // Salvar dados no localStorage ao adicionar ao carrinho
                    const addToCartButton = document.querySelector('.btn');
                    const quantitySelector = document.querySelector('.qnt');

                    addToCartButton.addEventListener('click', () => {
                        // Obter quantidade selecionada
                        const selectedQuantity = quantitySelector.value;

                        // Verifica se alguma cor foi selecionada
                        if (!selectedColor) {
                            alert('Por favor, selecione uma cor antes de adicionar ao carrinho.');
                            return;
                        }

                        // Criar objeto do produto
                        const cartProduct = {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            description: product.description,
                            quantity: selectedQuantity,
                            color: selectedColor, 
                            image:product.image,
                        };

                        // Recuperar carrinho atual do localStorage (ou criar um array vazio)
                        let cart = JSON.parse(localStorage.getItem('cart')) || [];

                        // Adicionar o produto ao carrinho
                        cart.push(cartProduct);

                        // Salvar o carrinho atualizado no localStorage
                        localStorage.setItem('cart', JSON.stringify(cart));

                        // Confirmar adição ao carrinho (opcional)
                        alert('Produto adicionado ao carrinho com sucesso!');
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
});
