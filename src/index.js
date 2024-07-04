import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWishList = []

console.log("Bem vindo ao seu carrinho da Shopee!")

const item1 = await createItem("Ferrari", 169.29, 1)
const item2 = await createItem("lamborghini", 69.29, 2)


await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

// await cartService.removeItem(myCart, item2)
// await cartService.removeItem(myCart, item2)

// await cartService.addItem(myWishList, item3)

// await cartService.deleteItem(myCart, item2.name)

await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart)