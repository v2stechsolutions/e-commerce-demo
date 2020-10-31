import React from 'react'
import Slider from "react-slick"
import { Link } from "react-router-dom"
import HomeClientLogo1 from '../../images/home/clientLogo1.png'
import HomeClientLogo2 from '../../images/home/clientLogo2.png'
import HomeClientLogo3 from '../../images/home/clientLogo3.png'
import HomeClientLogo4 from '../../images/home/clientLogo4.png'

class ClientTestimonial extends React.Component {
    render() {
        return (
            <div className="home_clientTestimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...settings}>
                                <div className="clientTestimonial">
                                    <Link to='/e-commerce-demo'><img src={HomeClientLogo1} alt="Home Client Logo" data-aos="fade-up" data-aos-duration="800" /></Link>
                                </div>
                                <div className="clientTestimonial">
                                    <Link to='/e-commerce-demo'><img src={HomeClientLogo2} alt="Home Client Logo" data-aos="fade-up" data-aos-duration="900" /></Link>
                                </div>
                                <div className="clientTestimonial">
                                    <Link to='/e-commerce-demo'><img src={HomeClientLogo3} alt="Home Client Logo" data-aos="fade-up" data-aos-duration="1000" /></Link>
                                </div>
                                <div className="clientTestimonial">
                                    <Link to='/e-commerce-demo'><img src={HomeClientLogo4} alt="Home Client Logo" data-aos="fade-up" data-aos-duration="1100" /></Link>
                                </div>
                                <div className="clientTestimonial">
                                    <Link to='/e-commerce-demo'><img src={HomeClientLogo1} alt="Home Client Logo" data-aos="fade-up" data-aos-duration="1200" /></Link>
                                </div>
                                <div className="clientTestimonial">
                                    <Link to='/e-commerce-demo'><img src={HomeClientLogo2} alt="Home Client Logo" data-aos="fade-up" data-aos-duration="1300" /></Link>
                                </div>
                                <div className="clientTestimonial">
                                    <Link to='/e-commerce-demo'><img src={HomeClientLogo3} alt="Home Client Logo" data-aos="fade-up" data-aos-duration="1400"/></Link>
                                </div>
                                <div className="clientTestimonial">
                                    <Link to='/e-commerce-demo'><img src={HomeClientLogo4} alt="Home Client Logo" data-aos="fade-up" data-aos-duration="1500"/></Link>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 439,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    ]
};
export default ClientTestimonial