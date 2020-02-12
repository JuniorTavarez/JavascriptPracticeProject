class Product {
    title = 'DEFAULT'
    imageUrl
    description
    price
    constructor(title, image, desc, price){
        this.title = title
        this.imageUrl = image
        this.description = desc
        this.price = price
    }
}

class ShoppingCart{
    item = []
    render(){
        const cartEl = document.createElement('section')
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `    
        cartEl.className = 'cart'
        return cartEl
    }
}
class ProductItem {
    constructor (product){
        this.product = product
       
    }

    addToCart() {
        console.log('adding product to cart...')
        console.log(this.product)
    }

    render (){
        const prodEl = document.createElement('li')
        prodEl.className = 'product-item'
        prodEl.innerHTML = `
            <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
            </div>
            </div>
            `
            const addCartButton = prodEl.querySelector('button')
            addCartButton.addEventListener('click', this.addToCart.bind(this))
            return prodEl
    }
    
}

class ProductList{
    products = [
        new Product(
            'A Pillow',
            'https://www.shopmarriott.com/images/products/v2/lrg/Marriott-The-Marriott-Pillow-MAR-108-L_lrg.jpg',
            'A soft pillow',
            19.99
              ),
        new Product(
            'Car',
            'https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg',
            'Expensive Car',
            20,000
        )
    ]
    constructor(){}

    render() {
        
        const prodList = document.createElement('ul')
        prodList.className = 'product-list'
            for (const prod of this.products){
            const productItem = new ProductItem(prod)
            const prodEl = productItem.render()
            prodList.append(prodEl)
            }
            return prodList
        }
    }

    class Shop {
        render(){
            const renderHook = document.getElementById('app')
            const cart = new ShoppingCart()
            const cartEl = cart.render()
            const productList = new ProductList()
            const prodListEl = productList.render()

            renderHook.append(cartEl)
            renderHook.append(prodListEl)
        }
    }
        
const shop = new Shop()
shop.render()