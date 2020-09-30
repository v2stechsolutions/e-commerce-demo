import React from 'react'
import Slider from "react-slick"
import MetaTags from 'react-meta-tags'
import productimages1 from '../../images/home/collection-watch-4.png'
import productimages2 from '../../images/home/collection-watch-5.png'
import productimages3 from '../../images/home/collection-watch-6.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import DownloadNow from '@material-ui/icons/FlashOn'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from "react-redux";
import { setCartData } from '../../actions'
import { getUpdatedCartData } from './functions/getUpdatedCartData'

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetails: product
        };
    }
    IncrementItem = () => {
        this.setState(prevState => {
            if (prevState.productDetails.quantity < 9) {
                return {
                    productDetails: {
                        ...prevState.productDetails,
                        quantity: prevState.productDetails.quantity + 1
                    }
                }
            } else {
                return null;
            }
        });
    }
    DecreaseItem = () => {
        this.setState(prevState => {
            if (prevState.productDetails.quantity > 1) {
                return {
                    productDetails: {
                        ...prevState.productDetails,
                        quantity: prevState.productDetails.quantity - 1
                    }
                }
            } else {
                return null;
            }
        });
    }
    handleChange = (event) => {
        this.setState({ "productDetails.quantity": event.target.value });
    }
    handleAddToCartClick = () => {
        const { productDetails } = this.state;
        const { subTotal, products, setCartData } = this.props;
        let newCartData = getUpdatedCartData(productDetails, subTotal, products);
        setCartData(newCartData) //updating cartData in redux store
    }
    render() {
        var settings = {
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <section className="section1">
                <MetaTags>
                    <title>E-commerce UI Design Case Study - Product</title>
                </MetaTags>
                <Container>
                    <Row>
                        <Col md={5}>
                            <div className="borde_sec">
                                <div className="pad">
                                    <Slider {...settings}>
                                        <div className="product_derails_srvices">
                                            <img src={productimages1} alt="product" />
                                        </div>
                                        <div className="product_derails_srvices">
                                            <img src={productimages2} alt="product" />
                                        </div>
                                        <div className="product_derails_srvices">
                                            <img src={productimages3} alt="product" />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="content">
                                <h3>{product.title}</h3>
                                <div className="rupres">
                                    <ul>
                                        <li>${product.price}</li>
                                        {/* <li>$2,299</li>
                                        <li>49% off</li> */}
                                        <li></li>
                                    </ul>
                                    <div className="cont">
                                        <p>{product.productDescription}</p>
                                    </div>
                                    <div className="in_de">
                                        <button onClick={this.DecreaseItem}>-</button>
                                        <input className="inputne"
                                            value={this.state.productDetails.quantity}
                                            onChange={this.handleChange}
                                            disabled={true}
                                        />
                                        <button onClick={this.IncrementItem}>+</button>
                                    </div>
                                    <div className="button_add_card">
                                        <a href="#/"
                                            className="hvr-shutter-out-horizontal add_cart"
                                            onClick={this.handleAddToCartClick}
                                        ><ShoppingCartIcon /> Add to cart</a>
                                        <a href="/shopping-cart" className="hvr-shutter-out-horizontal"><DownloadNow /> Buy now</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

const mapStateToProps = ({ cartData }) => {
    const { subTotal, products } = cartData;
    return { subTotal, products };
}

export default connect(mapStateToProps, { setCartData })(ProductDetails);

const product = {
    id: "1",
    title: "Adriatica ADR",
    price: 650,
    quantity: 1,
    sku: null,
    image: productimages1,
    productDescription: "The Formula 1 collection of watches by Tag Heuer exemplifies the brand’s belief in excellence when it comes to precise timing and sleek aesthetics. Drawing inspiration from the McLaren Formula 1 team, these watches are the ultimate witness to Tag Heuer’s superior crafting and technological skills. A complete overhaul of the existing structure of the Formula 1 was witnessed in 2015, leading to two parallel editions of the collection, both of which offer ideal timepieces for racing as well as horology enthusiasts.",
}