import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MetaTags, ReactTitle } from 'react-meta-tags'
import ShopBackground from "../../images/shop/shop-background.webp"

function ContactUs() {
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
                                        <input type="text" />
                                    </li>
                                    <li>
                                        <span>Last Name *</span>
                                        <input type="text" />
                                    </li>
                                </ul>
                                <ul className="clearfix">
                                    <li>
                                        <span>Town / City *</span>
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
                                        <span>Message</span>
                                        <textarea></textarea>
                                    </li>
                                </ul>
                                <div className="text-right">
                                    <a className="hvr-shutter-out-horizontal" id="submit" href="/">Submit</a>
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
