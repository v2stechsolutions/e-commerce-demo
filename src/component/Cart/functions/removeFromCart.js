export const removeFromCart = (cartData, productId) => {
    let { subTotal, products } = cartData;

    let newTotal = 0;
    let newProducts = products

    let idx = products.findIndex(prd => { return prd.id === productId })

    newTotal = subTotal - (products[idx].quantity * products[idx].price)

    newProducts.splice(idx, 1)
    if (newProducts.length === 0) {
        newTotal = 0
    }
    return { subTotal: newTotal, products: newProducts }
}