import React from "react"
import MetaTags from 'react-meta-tags';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShopBackground from "../../images/shop/shop-background.webp"
import { Col, Container, Row } from "react-bootstrap";
import Filters from "./Filters";
import CustomCard from "../commonComponent/watch/CustomCard";
import _ from 'lodash';
import { getAllProducts } from "./functions/getAllProducts";
import { getFiltersData } from "./functions/getFiltersData";

class ShopList extends React.Component {
        constructor(props){
            super(props)
            this.state={
                shoppingList:[],
                filterData:[],
            }
        }
    componentDidMount(){
        getAllProducts(this.getShoppingListCallback)
        getFiltersData(this.getFiltersListCallback)
    }
    getShoppingListCallback = (response) => {
        if (response) {
            this.setState({ shoppingList: response })
        }
    }
    getFiltersListCallback=(response)=>{
        if (response) {
            this.setState({ filterData: response })
        }
    }
    render() {
        const { shoppingList, filterData } = this.state
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
                                    <Filters filterData={filterData} />
                                </div>
                            </Col>
                            <Col md={9}>
                                <div className="content">
                                    <h2>Showing 9 of 45 Products</h2>
                                    <div className="card_list clearfix">
                                        {_.map(shoppingList, (item) => (
                                            <CustomCard
                                                imgPath={item?.image}
                                                title={item?.title}
                                                showCart
                                                price={item?.price}
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