import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { AddShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import CartList from './CartList'
import { useSelector, useDispatch } from 'react-redux'
import { SET_CART_DATA } from '../../actions/type'
import { removeFromCart } from './functions/removeFromCart'
/*  
    This functional component is used to render the cart details when hovered on cart icon.
*/

function Cart(props) {
    const dispatch = useDispatch()
    const cartData = useSelector(state => state.cartData)

    const setCartData = useCallback((cartData) => {
        dispatch({ type: SET_CART_DATA, payload: cartData })
    }, [dispatch])

    const removeProductFromCart = (productId) => {
        let newCartData = removeFromCart(cartData, productId)
        setCartData(newCartData)
    }
    // const { cartData } = props
    return (
        <>
            <AddShoppingCart /><span>{cartData.products.length}</span>
            <div className="check_out_box">
                {
                    cartData.products.length > 0
                        ? <>
                            <CartList products={cartData.products} removeFromCart={removeProductFromCart} />
                            <div className="sub_total">
                                <ul className="d-flex justify-content-between lst">
                                    <li><strong>Subtotal:</strong></li>
                                    <li>{cartData.subTotal}</li>
                                </ul>
                                <ul className="d-flex justify-content-between cst">
                                    <li><Link to="/shopping-cart">View cart</Link></li>
                                    <li><Link to="/checkout">Checkout</Link></li>
                                </ul>
                            </div>
                        </>
                        : <div className="sub_total">
                            <ul className="d-flex justify-content-between lst">
                                <li>Cart is empty.</li>
                            </ul>
                        </div>
                }
            </div>
        </>
    )
}

Cart.defaultProps = {
    cartData: {
        subTotal: 0,
        products: []
    }
}

Cart.propTypes = {
    cartData: PropTypes.object.isRequired
}

export default Cart

