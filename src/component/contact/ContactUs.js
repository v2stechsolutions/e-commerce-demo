import React,{
    useState,
    useRef,
} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MetaTags, ReactTitle } from 'react-meta-tags'
import ShopBackground from "../../images/shop/shop-background.webp"
import _ from "lodash"
import useForceUpdate from 'use-force-update';
import SimpleReactValidator from 'simple-react-validator';

export const ContactUs = () => {
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
            city: "",
            phone:"",
            emailAddress:"",
            message:"",
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
        <div className="contacrt_us_design">
            <MetaTags>
                <ReactTitle title="E-commerce UI Design Case Study - Contact" />
            </MetaTags>
            <div className="global_section_1">
                <img src={ShopBackground} alt="Shop Background" className="shop_backgroun" />
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="content">
                                <h2>Contact us</h2>
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
                                <h4>Send us a message</h4>
                                <ul className="clearfix">
                                    <li>
                                        <span>First Name *</span>
                                        <input
                                            type="text"
                                            required
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
                                    <li>
                                        <span>Town / City *</span>
                                        <input
                                            type="text"
                                            required
                                            name='city'
                                            value={state?.city}
                                            onChange={handleEventChange}
                                        />
                                        {validator.message('Town/City',state.city, 'required')}
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
                                        {validator.message('phone',state.phone, 'required')}
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
                                            onChange={handleEventChange}
                                        />
                                        {validator.message('Email address', state.emailAddress, 'required')}
                                    </li>
                                </ul>
                                <ul className="clearfix">
                                    <li className="p-0 w-100">
                                        <span>Message</span>
                                        <textarea
                                            type="text"
                                            name='message'
                                            value={state?.message}
                                            onChange={handleEventChange}>
                                        </textarea>
                                    </li>
                                </ul>
                                <div className="text-right">
                                    <button
                                        className="hvr-shutter-out-horizontal"
                                        id="submit"
                                        href="/e-commerce-demo"
                                        onClick={() => handleSubmit()}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="ifremm_sec">
                                <iframe title="v2stec" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21137.576587632917!2d72.95096299845639!3d19.183896427485074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9272af7ceb3%3A0x13f3788d4a27fef9!2sV2STech%20Solutions%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1599336846228!5m2!1sen!2sin" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ContactUs
