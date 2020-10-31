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
        <div className="hero_banner_section" style={style.heroBannerSection}>
            <Container>
                <Row>
                    <Col md={12} className="full_width" style={style.fullWidth}>
                        <Slider {...settings}>
                            {
                                bannerData.map((banner, i) => {
                                    return (
                                        <div className="content" key={"banner" + i} style={style.content}>
                                            <div className="top_center" style={style.topCenter}>
                                                <h1 style={style.bannerHeading}>{banner.heading}</h1>
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
const style={
    heroBannerSection:{
        backgroundColor: "#030303",
        marginTop: "-106px",
    },
    fullWidth:{
        position: "relative"
    },
    content:{
        padding: "190px 0",
        position: "relative",
    },
    topCenter:{
        maxWidth: "540px",
        position: "relative",
        zIndex: 9,
    },
    bannerHeading:{
        fontSize: "78px",
        lineHeight: "88px",
        color: "#ffffff",
        marginBottom: "35px",
    }
}

export default HeroBannnerSlider