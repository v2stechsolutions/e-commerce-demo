import { products } from "../../../data/products"
import { globalUrlGetFunction } from "../../globalDefination/globalFunctions/globalUrlGetFunction"

export const getAllProducts = (callback) => {
    let Url = 'getProductList'
    globalUrlGetFunction(Url, products || [], callback)
}
