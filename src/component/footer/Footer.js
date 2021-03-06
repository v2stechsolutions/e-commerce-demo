import React from 'react'
import { Link } from "react-router-dom"
import FooterLogo from '../../images/footer-logo.png'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={4} className="foter_logo" >
                        <Link to="/"><img src={FooterLogo} alt="footer logo" /></Link>
                    </Col>
                    <Col md={4} className="mb_10">
                        <h4>Menu</h4>
                        <ul className="menu_footer clearfix">
                            <li><a href="/shop-list">Shop </a></li>
                            <li><a href="/product-page">Product</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="from_section">
                        <h4>Sign Up For Our Newsletter</h4>
                        <form>
                            <input type="email" placeholder="Enter email" />
                            <input type="submit" className="submit" />
                        </form>
                    </Col>
                    <Col md={6} className="col-6 text-left">
                        <h6>All rights reserved 2020</h6>
                    </Col>
                    <Col md={6} className="col-6 text-right">
                        <ul className="social_icon">
                            <li><Link to="/"><TwitterIcon /></Link></li>
                            <li><Link to="/"><FacebookIcon /></Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer