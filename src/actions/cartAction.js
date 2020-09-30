import { SET_CART_DATA } from "./type";

export function setCartData(data) {
    return {
        type: SET_CART_DATA,
        payload: data
    }
}