window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        fetch('data/products.json')
            .then(response => response.json())
            .then(products => {
                const product = products.find(p => p.id === productId);
                if (product) {
                    document.getElementById('image-container').style.backgroundImage = `url(${product.image})`;
                    document.getElementById('product-name').textContent = product.name;
                    document.getElementById('product-price').textContent = `R$ ${product.price.toFixed(2)}`;
                    document.getElementById('product-description').textContent = product.description;
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

    document.getElementById('back-button').addEventListener('click', () => {
        window.history.back();
    });
});
