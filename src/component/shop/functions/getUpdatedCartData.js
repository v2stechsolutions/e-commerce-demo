import { removeFromCart } from '../../Cart/functions/removeFromCart'

export const getUpdatedCartData = (cartData, productId, action) => {
    switch (action) {
        case "increaseQty":
            return increaseQty(cartData, productId);
        case "decreaseQty":
            return decreaseQty(cartData, productId);
        case "remove":
            return removeFromCart(cartData, productId);
        default:
            return cartData
    }
}

const increaseQty = (cartData, productId) => {
    cartData.products.forEach(prd => {
        if (prd.id === productId) {
            if (prd.quantity < 9) {
                prd.quantity = prd.quantity + 1
                cartData.subTotal = cartData.subTotal + prd.price
            }
        }
    })

    return cartData
}

const decreaseQty = (cartData, productId) => {
    cartData.products.forEach(prd => {
        if (prd.id === productId) {
            if (prd.quantity > 1) {
                prd.quantity = prd.quantity - 1
                cartData.subTotal = cartData.subTotal - prd.price
            }
        }
    })

    return cartData
}
