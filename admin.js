document.getElementById('addProductButton').addEventListener('click', function() {
    const name = document.getElementById('productName').value;
    const size = document.getElementById('productSize').value;
    const price = document.getElementById('productPrice').value;
    const imageFile = document.getElementById('productImage').files[0];

    if (name && size && price && imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;

            const product = {
                name: name,
                size: size,
                price: parseFloat(price),
                imageUrl: imageUrl
            };

            addProductToLocalStorage(product);
        };
        reader.readAsDataURL(imageFile);
    }
});

function addProductToLocalStorage(product) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    clearInputFields();
}

function clearInputFields() {
    document.getElementById('productName').value = '';
    document.getElementById('productSize').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productImage').value = '';
    document.getElementById('index').value='';
}

document.getElementById('deleteButton').addEventListener('click', function() {
    const index=document.getElementById('index').value;
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    clearInputFields();
}
);