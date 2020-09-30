import React from 'react'
import MetaTags from 'react-meta-tags'
import ShopBackground from "../../images/shop/shop-background.webp"
import Remove from '@material-ui/icons/Add';
import Collections from "../../component/home/Collections"
import { Link } from "react-router-dom"
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from "react-redux";
import { setCartData } from '../../actions'
import { getUpdatedCartData } from './functions/getUpdatedCartData';
import { isCartUpdated } from './functions/compareCartList';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartDetails: {
                total: 0,
                cartList: []
            }
        };
    }
    componentDidMount() {
        const { subTotal, products } = this.props
        this.setState({
            cartDetails: {
                total: subTotal,
                cartList: products
            }
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (isCartUpdated(this.props.products, prevProps.products)) {
            this.setState({
                cartDetails: {
                    total: this.props.subTotal,
                    cartList: this.props.products
                }
            })
        } else if (this.props.subTotal !== prevProps.subTotal) {
            this.setState({
                cartDetails: {
                    total: this.props.subTotal,
                    cartList: this.props.products
                }
            })
        }
    }
    IncrementItem = (productId) => {
        const { subTotal, products, setCartData } = this.props
        let newCartData = getUpdatedCartData({ subTotal, products }, productId, "increaseQty")
        console.log(newCartData)
        setCartData(newCartData)
    }
    DecreaseItem = (productId) => {
        const { subTotal, products, setCartData } = this.props
        let newCartData = getUpdatedCartData({ subTotal, products }, productId, "decreaseQty")
        setCartData(newCartData)

    }
    removeItem = (productId) => {
        const { subTotal, products, setCartData } = this.props
        let newCartData = getUpdatedCartData({ subTotal, products }, productId, "remove")
        setCartData(newCartData)
    }

    render() {
        const { cartList, total } = this.state.cartDetails
        return (
            <div className="shopping_cart">
                <MetaTags>
                    <title>E-commerce UI Design Case Study - Shopping Cart</title>
                </MetaTags>
                <div className="global_section_1">
                    <img src={ShopBackground} alt="Shop Background" className="shop_backgroun" />
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="content">
                                    <h2>Shopping Cart</h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="Section_2">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="pad">
                                    <div className="content">
                                        {
                                            cartList.length > 0
                                                ? <h3>You Have {cartList.length} Items In Your Cart</h3>
                                                : <h3>Your cart is currently empty.</h3>
                                        }

                                    </div>
                                    <div className="content_product">
                                        <div className="top_name clearfix">
                                            <div className="product all">
                                                <h6>Product</h6>
                                            </div>
                                            <div className="prise all">
                                                <h6>Price</h6>
                                            </div>
                                            <div className="quantity all">
                                                <h6>Quantity</h6>
                                            </div>
                                            <div className="subtotal all">
                                                <h6>Subtotal</h6>
                                            </div>
                                        </div>
                                        {
                                            cartList.map((prd, i) => {
                                                return (
                                                    <div className="top_name d-flex align-items-center clearfix" key={"prd" + i}>
                                                        <div className="product all">
                                                            <div className="pik d-flex align-items-center">
                                                                <img src={prd.image} alt="Watch" />
                                                                <span>{prd.title}</span>
                                                            </div>
                                                        </div>
                                                        <div className="prise all">
                                                            <h4>${prd.price}</h4>
                                                        </div>
                                                        <div className="quantity all">
                                                            <div className="in_de">
                                                                <button onClick={() => this.DecreaseItem(prd.id)}>-</button>
                                                                <input className="inputne" value={prd.quantity} disabled={true} />
                                                                <button onClick={() => this.IncrementItem(prd.id)}>+</button>
                                                            </div>
                                                        </div>
                                                        <div className="subtotal all">
                                                            <h4>${prd.price * prd.quantity}</h4>
                                                        </div>
                                                        <Remove onClick={() => this.removeItem(prd.id)} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="Section_3">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="content">
                                    <h3>Have A Promotional Code?</h3>
                                    <div className="coupon">
                                        <form>
                                            <input type="email" placeholder="Coupon code" />
                                            <input type="submit" className="submit" value="Submit" />
                                        </form>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content">
                                    <h3>Cart totals</h3>
                                    <div className="d-flex justify-content-between sec">
                                        <h5>Subtotal</h5>
                                        <h5>${total}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between sec">
                                        <h5>Total</h5>
                                        <h5>${total}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between sec_bot">
                                        <Link to="/shopping-cart" className="bord">Update cart</Link>
                                        <Link to="/checkout">Process to checkout</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Collections />
            </div>
        )
    }
}

const mapStateToProps = ({ cartData }) => {
    const { subTotal, products } = cartData;
    return { subTotal, products };
}

export default connect(mapStateToProps, { setCartData })(ShoppingCart)