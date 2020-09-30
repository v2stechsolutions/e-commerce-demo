import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick"
import testimonialReview1 from '../../images/home/testimonialReview1.png'
import testimonialReview2 from '../../images/home/testimonialReview2.png'

function TestimonialReview() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className="home_testimonialReview">
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <h2>What Customers Are Saying</h2>
                    </Col>
                    <Col md={12} className="text-center">
                        <Slider {...settings}>
                            {
                                reviews.map((review, i) => {
                                    return (
                                        <div className="testimonialReview" key={"t" + i}>
                                            <div className="left_sec">
                                                <img src={review.image} alt="testimonial Review" />
                                            </div>
                                            <div className="right_sec" data-aos="fade-left"
                                                data-aos-anchor="#example-anchor"
                                                data-aos-offset="500"
                                                data-aos-duration="500">
                                                <h3>{review.reviewerName}</h3>
                                                <p>{review.reviewMessage}</p>
                                            </div>
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

export default TestimonialReview

const reviews = [
    {
        reviewerName: "Amanda Smith",
        reviewMessage: "As many of you know, our company has a wide field of activity: we are engaged in the development of products, publish design and code related articles, and support the Market, where designers publish their products to sell.",
        image: testimonialReview1
    },
    {
        reviewerName: "Sandra  Willims",
        reviewMessage: "As many of you know, our company has a wide field of activity: we are engaged in the development of products, publish design and code related articles, and support the Market, where designers publish their products to sell.",
        image: testimonialReview2
    },
    {
        reviewerName: "Amanda Smith",
        reviewMessage: "As many of you know, our company has a wide field of activity: we are engaged in the development of products, publish design and code related articles, and support the Market, where designers publish their products to sell.",
        image: testimonialReview1
    },
    {
        reviewerName: "Sandra  Willims",
        reviewMessage: "As many of you know, our company has a wide field of activity: we are engaged in the development of products, publish design and code related articles, and support the Market, where designers publish their products to sell.",
        image: testimonialReview2
    }
]