import React from "react"
import MetaTags from 'react-meta-tags';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShopBackground from "../../images/shop/shop-background.webp"
import collectionWatch4 from "../../images/home/collection-watch-4.png"
import collectionWatch5 from "../../images/home/collection-watch-5.png"
import collectionWatch6 from "../../images/home/collection-watch-6.png"
import { Col, Container, Row } from "react-bootstrap";
import Filters from "./Filters";
import { filters } from "../../data/filtersData";
import CustomCard from "../commonComponent/watch/CustomCard";
import _ from 'lodash';

class ShopList extends React.Component {
    render() {
        let shoppingList=[collectionWatch4,collectionWatch5,collectionWatch6,collectionWatch5,collectionWatch4,collectionWatch6]
        return (
            <div className="shop_list">
                <MetaTags>
                    <title>E-commerce UI Design Case Study - Shopping List</title>
                </MetaTags>
                <div className="global_section_1">
                    <img src={ShopBackground} alt="Shop Background" className="shop_backgroun" />
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="content">
                                    <h2>Shopping List</h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="Section_1">
                    <Container>
                        <Row>
                            <Col md={3}>
                                <div className="content_filter">
                                    <Filters filterData={filters} />
                                </div>
                            </Col>
                            <Col md={9}>
                                <div className="content">
                                    <h2>Showing 9 of 45 Products</h2>
                                    <div className="card_list clearfix">
                                        {_.map(shoppingList, (item) => (
                                            <CustomCard
                                                imgPath={item}
                                                title='Adriatica ADR'
                                                showCart
                                                price={650.00}
                                            />
                                        ))
                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default ShopList