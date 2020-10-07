import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../component/header/Header'
import Home from '../../src/component/home/Home'
import Footer from '../../src/component/footer/Footer'
import ProductPage from '../component/Product/ProductPage'
import EmptyCheckout from "../../src/component/shop/EmptyCheckout"
import ShoppingCart from "../../src/component/shop/ShoppingCart"
import Checkout from "../../src/component/shop/Checkout"
import ShopList from "../../src/component/shop/ShopList"
import { ContactUs } from "../component/contact"

function AppRouter() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/product-page" component={ProductPage} />
                <Route exact path="/empty-checkout" component={EmptyCheckout} />
                <Route exact path="/shopping-cart" component={ShoppingCart} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/shop-list" component={ShopList} />
                <Route exact path="/contact" component={ContactUs} />
            </Switch>
            <Footer />
        </Router>
    )
}
export default AppRouter;