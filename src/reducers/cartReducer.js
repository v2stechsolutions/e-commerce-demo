import { SET_CART_DATA } from "../actions/type"


const INITIAL_STATE = {
    subTotal: 0,
    products: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_CART_DATA:
            return (
                { ...state, ...payload }
            )
        default:
            return state
    }
}