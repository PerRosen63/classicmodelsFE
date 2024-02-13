let productList = document.getElementById('productList');


function printProducts() {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => {
        console.log('produkter', data);

        data.map(product => {
            let li = document.createElement('li');
            li.innerText = product.productName;

            productList.appendChild(li);
        })
    })
}
printProducts();