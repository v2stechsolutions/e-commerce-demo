import React from 'react'
import Slider from "react-slick"
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';

AOS.init({
    easing: 'ease-out-back',
    duration: 1000,
    disable: 'mobile'
});

function OurStore() {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    const arr = [1, 2, 3]
    return (
        <div className="home_our_store">
            <Container>
                <Row>
                    <Col md={6}></Col>
                    <Col md={6}>
                        <div className="our_store_slider" data-aos="fade-left" data-aos-duration="500">
                            <Slider {...settings}>
                                {
                                    arr.map(n => {
                                        return (
                                            <div className="section" key={"s" + n}>
                                                <h2>Our Store</h2>
                                                <p>As many of you know, our company has a wide field of activity: we are engaged in the development of products, publish design and code related articles, and support the Market, where designers publish their products to sell. FS Industrie is created for digital designs where flexibility is essential. Designed by Phil Garnham and Fernando Mello, the font combines aesthetics with functional utility, delivering a precise and direct feel. </p>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default OurStore
