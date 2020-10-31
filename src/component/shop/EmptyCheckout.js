import React from 'react'
import MetaTags from 'react-meta-tags'
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ShopBackground from "../../images/shop/shop-background.webp"
import User from '@material-ui/icons/Person'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import HttpsIcon from '@material-ui/icons/Https'
import InputGroup from "react-bootstrap/InputGroup"
import { Col, Container, Row } from 'react-bootstrap'

class EmptyCheckout extends React.Component {
    render() {
        return (
            <div className="empty_checkout">
                <MetaTags>
                    <title>E-commerce UI Design Case Study - Empty checkout</title>
                </MetaTags>
                <div className="section_1">
                    <img src={ShopBackground} alt="Shop Background" className="shop_backgroun" />
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="content">
                                    <h2>Empty Checkout</h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section_2">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="content d-flex align-item-center justify-content-between">
                                    <h3>Your cart is currently empty.</h3>
                                    <Link to="/shop-list"><ShoppingCartIcon /> Return to shop</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section_3">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="content left">
                                    <h3>Join The Community</h3>
                                    <h4>Register now to become part of our community.</h4>
                                    <form>
                                        <div className="from-group">
                                            <label>Full name *</label>
                                            <User />
                                            <input type="name" required />
                                        </div>
                                        <div className="from-group">
                                            <label>Email Address *</label>
                                            <MailIcon />
                                            <input type="email" required />
                                        </div>
                                        <div className="from-group">
                                            <label>Phone number *</label>
                                            <PhoneIphoneIcon />
                                            <input type="number" required />
                                        </div>
                                        <div className="from-group">
                                            <label>Create password *</label>
                                            <HttpsIcon />
                                            <input type="password" required />
                                        </div>
                                        <div className="from-group">
                                            <label>Confirm password *</label>
                                            <HttpsIcon />
                                            <input type="password" required />
                                        </div>
                                        <h6>Allready have an account? <Link to="/e-commerce-demo">Sign in Now!</Link></h6>
                                        <a href="/e-commerce-demo">
                                            <input value="Register Now" className="submit" />
                                        </a>
                                    </form>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content right">
                                    <h3>Sign In </h3>
                                    <h4>Login to your account</h4>
                                    <form>
                                        <div className="from-group">
                                            <label>Username or e-mail * </label>
                                            <User />
                                            <input type="name" required />
                                        </div>
                                        <div className="from-group">
                                            <label>Confirm password *</label>
                                            <HttpsIcon />
                                            <input type="password" required />
                                        </div>
                                        <div className="d-flex justify-content-between fogot__pass">
                                            <Link to="/e-commerce-demo">Forgot password?</Link>
                                            <InputGroup.Prepend>
                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" value="" />
                                                <span>Keep me Signed</span>
                                            </InputGroup.Prepend>
                                        </div>
                                        <a href="/e-commerce-demo">
                                            <input value="Sign in" className="submit" />
                                        </a>
                                    </form>
                                    <div className="or text-center">
                                        <h6><span>or</span></h6>
                                        <div className="d-flex justify-content-between social_icon">
                                            <Link to="/e-commerce-demo" className="left"> Login with facebook</Link>
                                            <Link to="/e-commerce-demo" className="right">Login with google</Link>
                                        </div>
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
export default EmptyCheckout