import React from 'react'
import Slider from "react-slick"
import { Link } from "react-router-dom"
import { Col, Container, Row } from 'react-bootstrap'
import { bannerData } from '../../data/bannerData'

function HeroBannnerSlider() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className="hero_banner_section">
            <Container>
                <Row>
                    <Col md={12} className="full_width">
                        <Slider {...settings}>
                            {
                                bannerData.map((banner, i) => {
                                    return (
                                        <div className="content" key={"banner" + i}>
                                            <div className="top_center">
                                                <h1>{banner.heading}</h1>
                                                <ul>
                                                    <li><Link to={banner.path} className="hvr-shutter-out-horizontal">{banner.linkText}</Link></li>
                                                </ul>
                                            </div>
                                            <img src={banner.image} alt="Hero Banner Slider" className="hero_banner_slider" />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroBannnerSlider