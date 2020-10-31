import React from 'react'
// import { Link } from "react-router-dom"
import { Tabs, Tab } from 'react-bootstrap-tabs'
import Slider from "react-slick"
import { Col, Container, Row } from 'react-bootstrap'
import { products } from '../../data/products'
import CustomCard from "../commonComponent/watch/CustomCard";

function Collections() {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 539,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <div className="home_collections">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="content">
                            <h2>Collections</h2>
                            <Tabs>
                                <Tab label="latest">
                                    <Slider {...settings}>
                                        {
                                            products.map((p, i) => {
                                                return (
                                                    <div className="slider_section"
                                                        data-aos="fade-up"
                                                        data-aos-duration="700"
                                                        key={"pl" + i}
                                                    >
                                                        <CustomCard
                                                            imgPath={p.image}
                                                            title={p.title}
                                                            price={p.price}
                                                        />
                                                    </div>
                                                   
                                                )
                                            })
                                        }
                                    </Slider>
                                </Tab>
                                <Tab label="Popular">
                                    <Slider {...settings}>
                                        {
                                            products.map((p, i) => {
                                                return (
                                                    <div
                                                        className="slider_section"
                                                        data-aos="fade-up"
                                                        data-aos-duration="700"
                                                        key={"pp" + i}
                                                    >
                                                         <CustomCard
                                                            imgPath={p.image}
                                                            title={p.title}
                                                            price={p.price}
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Collections;