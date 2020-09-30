import React from 'react'
import PropTypes from 'prop-types'
import { Remove } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function CartList(props) {
    const { products, removeFromCart } = props
    return (
        <>
            {
                products.map((item, i) => {
                    return (
                        <Link to="#/" className="clearfix" key={"prod" + i}>
                            <div className="image">
                                <img src={item.image} alt="watch" />
                            </div>
                            <div className="content">
                                <ul>
                                    <li>{item.productName}</li>
                                    <li>Qty: <small>{item.quantity}</small></li>
                                    <li>Price: <small>${item.price}</small></li>
                                </ul>
                            </div>
                            <Remove onClick={()=>{removeFromCart(item.id)}}/>
                        </Link>
                    )
                })
            }
        </>
    )
}

CartList.defaultProps = {
    products: [],
    removeFromCart: () => { }
}

CartList.propTypes = {
    products: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired
}

export default CartList

