/* This function takes three argument productDetails, subTotal and products.
    The subTotal and products are redux props for cartData.
*/
export const getUpdatedCartData = (productDetails, subTotal, products) => {
    let newSubTotal = 0;
    let productQuantity = productDetails.quantity;

    newSubTotal = subTotal + (productDetails.price * productQuantity);

    let newProductList = products;

    let idx = newProductList.findIndex(item => { return item.id === productDetails.id })
    if (idx > -1) {
        let tempPrice = 0
        newProductList.forEach(prd => {
            if (prd.id === productDetails.id) {
                prd.quantity = prd.quantity + productDetails.quantity
            }
            tempPrice = tempPrice + (prd.quantity * prd.price)
        })
        if (tempPrice !== newSubTotal) {
            newSubTotal = tempPrice
        }
    } else {
        newProductList.push(productDetails)
    }

    return { subTotal: newSubTotal, products: newProductList }
}