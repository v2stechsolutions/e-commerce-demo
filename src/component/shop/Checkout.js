import React from 'react'
import MetaTags from 'react-meta-tags'
import ShopBackground from "../../images/shop/shop-background.webp"
import Card from "../../images/home/card.png"
import { Link } from "react-router-dom"
import { Col, Container, Row } from 'react-bootstrap'


class Checkout extends React.Component {
    render() {
        return (
            <div className="checkout_check">
                <MetaTags>
                    <title>E-commerce UI Design Case Study - Checkout</title>
                </MetaTags>
                <div className="global_section_1">
                    <img src={ShopBackground} alt="Shop Background" className="shop_backgroun" />
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="content">
                                    <h2>Checkout</h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="Section_1">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="content">
                                    <ul>
                                        <li>Have A Promotional Code?</li>
                                        <li>
                                            <form>
                                                <input type="text" placeholder="Coupon code" />
                                                <input type="submit" className="submit" value="Apply Coupon" />
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="Section_2">
                    <Container>
                        <Row>
                            <Col md={7}>
                                <div className="content">
                                    <h4>Billing Details</h4>
                                    <ul className="clearfix">
                                        <li>
                                            <span>First Name *</span>
                                            <input type="text" />
                                        </li>
                                        <li>
                                            <span>Last Name *</span>
                                            <input type="text" />
                                        </li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li className="p-0 w-100">
                                            <span>Company Name (Optional)</span>
                                            <input type="text" />
                                        </li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li className="p-0 w-100">
                                            <span>Country *</span>
                                            <input type="text" />
                                        </li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li className="p-0 w-100">
                                            <span>Street address *</span>
                                            <input type="text" />
                                        </li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li>
                                            <span>Town / City *</span>
                                            <input type="text" />
                                        </li>
                                        <li>
                                            <span>State / County *</span>
                                            <input type="text" />
                                        </li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li>
                                            <span>Postcode / ZIP *</span>
                                            <input type="text" />
                                        </li>
                                        <li>
                                            <span>Phone *</span>
                                            <input type="text" />
                                        </li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li className="p-0 w-100">
                                            <span>Email address *</span>
                                            <input type="email" />
                                        </li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li className="p-0 w-100">
                                            <span>Order notes (optional)</span>
                                            <textarea></textarea>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="card_sec">
                                    <h5>Your Order</h5>
                                    <ul className="product fs d-flex justify-content-between">
                                        <li>Product</li>
                                        <li>Total</li>
                                    </ul>
                                    <ul className="product d-flex justify-content-between">
                                        <li>Adriatica ADR Watch</li>
                                        <li>$650.00</li>
                                    </ul>
                                    <ul className="product d-flex justify-content-between">
                                        <li>Adriatica ADR Watch</li>
                                        <li>$650.00</li>
                                    </ul>
                                    <ul className="product d-flex justify-content-between">
                                        <li>Adriatica ADR Watch</li>
                                        <li>$650.00</li>
                                    </ul>
                                    <ul className="product sb d-flex justify-content-between">
                                        <li>Subtotal:</li>
                                        <li>$1950.00</li>
                                    </ul>
                                    <ul className="checkout">
                                        <li><Link to="/">Checkout</Link></li>
                                    </ul>
                                    <div className="or text-center">
                                        <h6><span>or</span></h6>
                                        <ul className="d-flex justify-content-between social_icon">
                                            <li>
                                                <img src={Card} alt="images" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Checkout