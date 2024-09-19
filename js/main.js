window.addEventListener("load", () => {
    const productsContainer = document.querySelector('.products-container');
    const iconCategories = document.getElementById("category-icons");
    const searchInput = document.querySelector('.search-container input');

    function displayProducts(products) {
        let productRow = '';

        products.forEach((product, index) => {
            if (index % 2 === 0) {
                productRow += `<div class="product-row">`;
            }

            productRow += `
                <div class="product" style="background-image: url(${product.image}); background-size: cover; background-position: center;" data-id="${product.id}">
                    <div class="product-txt">
                        <p>R$ ${product.price.toFixed(2)}</p>
                        <h3>${product.name}</h3>
                    </div>
                </div>
            `;

            if ((index + 1) % 2 === 0 || index === products.length - 1) {
                productRow += `</div>`;
            }
        });

        productsContainer.innerHTML = productRow;

        // Adiciona eventos de clique nos produtos
        const productElements = document.querySelectorAll('.product');
        productElements.forEach(product => {
            product.addEventListener('click', function() {
                const productId = product.getAttribute('data-id');
                window.location.href = `product-details.html?id=${productId}`;
            });
        });
    }

    function filterProductsByCategory(categoryName) {
        fetch('data/products.json')
            .then(response => response.json())
            .then(products => {
                const filteredProducts = products.filter(product => product.category === categoryName);
                displayProducts(filteredProducts);
            })
            .catch(error => {
                console.error('Erro ao carregar os produtos:', error);
            });
    }

    function fetchAndDisplayAllProducts() {
        fetch('data/products.json')
            .then(response => response.json())
            .then(products => {
                displayProducts(products);
            })
            .catch(error => {
                console.error('Erro ao carregar os produtos:', error);
            });
    }

    function filterProductsByName(searchTerm) {
        fetch('data/products.json')
            .then(response => response.json())
            .then(products => {
                const filteredProducts = products.filter(product =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                displayProducts(filteredProducts);
            })
            .catch(error => {
                console.error('Erro ao carregar os produtos:', error);
            });
    }

    function addClickIcons() {
        const icons = document.querySelectorAll('.icons');
        icons.forEach(icon => {
            icon.addEventListener('click', function() {
                const clickedCategory = icon.getAttribute('data-category');
                if (clickedCategory === 'all') {
                    fetchAndDisplayAllProducts();
                } else {
                    filterProductsByCategory(clickedCategory);
                }
            });
        });
    }

    searchInput.addEventListener('input', function(event) {
        const searchTerm = event.target.value;
        filterProductsByName(searchTerm);
    });

    fetch('data/categories.json')
        .then(response => response.json())
        .then(categories => {
            categories.forEach(category => {
                iconCategories.innerHTML += `
                    <div class="icons" data-category="${category.name}">
                        <img src="./assets/img/icons/${category.icon}" alt="${category.name}" fill="${category.iconColor}">
                        <p style="color:${category.color} ;">${category.name}</p>
                    </div>
                `;
            });
        ;

            addClickIcons();
            fetchAndDisplayAllProducts();
        })
        .catch(error => {
            console.error('Erro ao carregar as categorias:', error);
        });
});
