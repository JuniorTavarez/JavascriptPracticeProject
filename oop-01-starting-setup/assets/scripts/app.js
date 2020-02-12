const productList = {
    products: [
        {
            title: 'A Pillow',
            imageUrl : 'https://www.shopmarriott.com/images/products/v2/lrg/Marriott-The-Marriott-Pillow-MAR-108-L_lrg.jpg', 
            price: 19.99,
            description: 'A soft pillow'
        },
        {
            title: 'A Car',
            imageUrl : 'https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg', 
            price: 20000.99,
            description: 'Expensive Car'
        }
    ],
    render() {
    const renderHook = document.getElementById('app')
    const prodList = document.createElement('ul')
    prodList.className = 'product-list'
        for (const prod of this.products){
            const prodEl = document.createElement('li')
            prodEl.className = 'product-item'
            prodEl.innerHTML = `
                <div>
                <img src="${prod.imageUrl}" alt="${prod.title}">
                <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>\$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to Cart</button>
                </div>
                </div>
                `
        prodList.append(prodEl)
            }

    renderHook.append(prodList)
    }
    
}
productList.render()