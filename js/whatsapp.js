let settings; // Variável global para armazenar as configurações

fetch('data/settings.json')
    .then(response => response.json())
    .then(data => {
        settings = data; // Armazena as configurações na variável global
        // Chama a função assim que as configurações forem carregadas
        configurarBotaoWhatsApp();
    })
    .catch(error => {
        console.error('Erro ao carregar as configurações:', error);
    });

// Função para enviar o carrinho via WhatsApp
function enviarCarrinhoViaWhatsApp() {
    // Recuperar o carrinho do localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert("O carrinho está vazio.");
        return;
    }

    // Formatar a mensagem
    let mensagem = settings.whatsapp.message;

    cart.forEach(item => {
        mensagem += `Produto: ${item.name}\n`;
        mensagem += `Preço: R$ ${item.price.toFixed(2)}\n`;
        mensagem += `Quantidade: ${item.quantity}\n`;
        mensagem += `Cor: ${item.color}\n`;
        mensagem += `Tamanho: ${item.size}\n\n`;
    });

    // Codificar a mensagem para ser usada em uma URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Número de telefone para enviar (agora usando a variável global)
    const numeroTelefone = settings.whatsapp.number; 

    // Criar o link do WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagemCodificada}`;

    // Abrir o link do WhatsApp
    window.open(linkWhatsApp, '_blank');
}

// Função para adicionar o evento de clique no botão
function configurarBotaoWhatsApp() {
    const botao = document.querySelector('#btn-enviar-whatsapp');
    if (botao) {
        botao.addEventListener('click', enviarCarrinhoViaWhatsApp);
    }
}
