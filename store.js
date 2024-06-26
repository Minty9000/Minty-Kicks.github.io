function addProductCard(product) {
    const productList = document.getElementById('productList');
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <h2>Size: ${product.size}</h2>
        <h3>${product.name}</h3>
        <img src="${product.imageUrl}" width="90%" >
        <p>Price: $${product.price.toFixed(2)}</p>
    `;
    productList.appendChild(productCard);
}

// Retrieve products from localStorage and display them
function initializeProductList(size) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    if(size!=0){
        products.forEach(function(product){
            if(product.size==size){
                addProductCard(product);
            }});
    }
    else{
        products.forEach(product => addProductCard(product));
    }
}

// Call initializeProductList on page load
window.addEventListener('load', initializeProductList(document.getElementById('sizeSelector').value));

function clear(){
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
}
document.getElementById('searchSize').addEventListener('click', function() {
    clear();
    initializeProductList(document.getElementById('sizeSelector').value)
});
document.getElementById('sizeNeeded').addEventListener('click', function(event) {
    event.preventDefault()
});
