import React,{
    useState,
    useRef,
} from 'react'
import MetaTags from 'react-meta-tags'
import ShopBackground from "../../images/shop/shop-background.webp"
import Card from "../../images/home/card.png"
import { Link } from "react-router-dom"
import { Col, Container, Row } from 'react-bootstrap'
import _ from "lodash"
import useForceUpdate from 'use-force-update';
import SimpleReactValidator from 'simple-react-validator';

const Checkout = () => {
    const setData = ({ type, payload }) => (
        setState({
          ...state,
          ..._.setWith(
            state, type,
            payload,
            Object,
          ),
        }));

    const initialState = {
        firstName: '',
        lastName: "",
        companyName:"",
        country: "",
        phone:"",
        emailAddress:"",
        message:"",
        streetAddress:"",
        stateName:"",
        town:"",
        postcode:"",
        orderNotes:"",
    };
    const [state, setState] = useState(initialState);
    const forceUpdate = useForceUpdate();

    const { current: validator } = useRef(new SimpleReactValidator({
        element: (message) => <span className="text-danger small">{message}</span>,
        validators: {},
    }));
    const handleSubmit=()=>{
        checkValidation()
    }

    const checkValidation = () => {
        if (validator.allValid()) {
            return true;
        }
        else {
            validator.showMessages();
            forceUpdate();
            return false;
        }
    }

    const handleChange = (type, payload) => setData({ type, payload });
    const handleEventChange = ({ target: { name, value } }) => handleChange(name, value);
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
                                            <input
                                                type="text"
                                                name='firstName'
                                                value={state.firstName}
                                                onChange={handleEventChange}
                                            />
                                             {validator.message('First Name',state.firstName, 'required')}
                                        </li>
                                        <li>
                                            <span>Last Name *</span>
                                            <input
                                                type="text"
                                                required
                                                name='lastName'
                                                value={state.lastName}
                                                onChange={handleEventChange}
                                            />
                                            {validator.message('Last Name',state.lastName, 'required')}
                                        </li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li className="p-0 w-100">
                                            <span>Company Name (Optional)</span>
                                            <input
                                                type="text"
                                                name='companyName'
                                                value={state.companyName}
                                                onChange={handleEventChange}
                                            />
                                        </li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li className="p-0 w-100">
                                            <span>Country *</span>
                                            <input
                                                required
                                                type="text"
                                                name='country'
                                                value={state?.country}
                                                onChange={handleEventChange}
                                            />
                                            {validator.message('Country',state.country, 'required')}
                                        </li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li className="p-0 w-100">
                                            <span>Street address *</span>
                                            <input
                                                required
                                                type="text"
                                                name='streetAddress'
                                                value={state?.streetAddress}
                                                onChange={handleEventChange}
                                            />
                                            {validator.message('Street address', state?.streetAddress, 'required')}
                                        </li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li>
                                            <span>Town / City *</span>
                                            <input 
                                                type="text"
                                                required
                                                name='town'
                                                value={state?.town}
                                                onChange={handleEventChange}
                                            />
                                            {validator.message('Town / City', state?.town, 'required')}
                                        </li>
                                        <li>
                                            <span>State / County *</span>
                                            <input
                                                type="text"
                                                required
                                                name='stateName'
                                                value={state?.stateName}
                                                onChange={handleEventChange}
                                            />
                                            {validator.message('State / County', state?.stateName, 'required')}
                                        </li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li>
                                            <span>Postcode / ZIP *</span>
                                            <input
                                                type="text"
                                                required
                                                name='postcode'
                                                value={state?.postcode}
                                                onChange={handleEventChange}
                                            />
                                            {validator.message('Postcode / Zip', state?.postcode, 'required')}
                                        </li>
                                        <li>
                                            <span>Phone *</span>
                                            <input
                                                type="text"
                                                required
                                                name='phone'
                                                value={state?.phone}
                                                onChange={handleEventChange}
                                            />
                                            {validator.message('Phone', state?.phone, 'required')}
                                        </li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li className="p-0 w-100">
                                            <span>Email address *</span>
                                            <input
                                                type="email"
                                                required
                                                name='emailAddress'
                                                value={state?.emailAddress}
                                            />
                                        </li>
                                        {validator.message('Email address', state?.emailAddress, 'required')}
                                    </ul>
                                    <ul className="clearfix">
                                        <li className="p-0 w-100">
                                            <span>Order notes (optional)</span>
                                            <textarea
                                                type="text"
                                                required
                                                name='orderNotes'
                                                value={state?.orderNotes}
                                            >
                                            </textarea>
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
                                        <li><Link to="/e-commerce-demo">Checkout</Link></li>
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

export default Checkout