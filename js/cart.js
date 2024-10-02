window.addEventListener("load", () => {
    // Recupera o carrinho do localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p>Seu carrinho está vazio.</p>
        <img src="./assets/img/sad.svg">`;
    } else {
        cart.forEach(item => {
            // Criar o elemento de item do carrinho
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');

            // Montar o HTML do item, incluindo a imagem
            itemElement.innerHTML = `
            <div class="cart-container">
                <h3>${item.name}</h3>
                <div class="cart-info">
                <div class="cart-item-image" style="background-image: url(${item.image});">
    
                </div>
                    <div class="cart-item-info">
                        <p><span>Preço:</span> R$ ${item.price.toFixed(2)}</p>
                        <p><span>Quantidade:</span> ${item.quantity}</p>
                        <p><span>Cor:</span> <span style="background-color: ${item.color}; width: 20px; height: 20px; display: inline-block;"></span></p>
                        <p><span>Total:</span> R$ ${(item.price * item.quantity).toFixed(2)}</p>
                        <button class="remove-item" data-id="${item.id}">Remover</button>
                    </div>
                </div>
                </div>
            `;

            // Adiciona o item ao container do carrinho
            cartItemsContainer.appendChild(itemElement);

            // Calcula o total
            total += item.price * item.quantity;
        });

        // Exibe o total no elemento de total
        cartTotalElement.textContent = total.toFixed(2);
        cartTotal.textContent = total.toFixed(2);
    }

    // Adicionar funcionalidade de remover item do carrinho
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-id');
            removeItemFromCart(productId);
        });
    });
});

// Função para remover item do carrinho
function removeItemFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Filtrar os itens para remover o item com o id correspondente
    cart = cart.filter(item => item.id !== productId);

    // Atualizar o localStorage com os itens restantes
    localStorage.setItem('cart', JSON.stringify(cart));

    // Recarregar a página para atualizar o carrinho
    window.location.reload();
}
