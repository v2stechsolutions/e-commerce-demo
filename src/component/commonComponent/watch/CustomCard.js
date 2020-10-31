import React from "react"
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { FormatCurrency } from "../../utilityComponent/FormatCurrency"

const CustomCard = (props) => {
    const { imgPath, price, title, showCart,priceSign } = props
    return (
        <div className="box text-center">
            <div className="pad">
                <Link to="/product-page">
                    <img src={imgPath} alt={title} />
                </Link>
                <h5>{title}</h5>
                <Link to="/product-page">{FormatCurrency(price,priceSign)} </Link>
                {showCart ?
                    <Link to="/shopping-cart" className="shopping_cart">
                        <ShoppingCartIcon /> Add to Cart
                    </Link> : null}
            </div>
        </div>)
}
CustomCard.defaultProps={
  priceSign:'$'  
}
export default CustomCard
