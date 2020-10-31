import React from 'react'
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import logo from '../../images/logo.png'
import Modal from 'react-bootstrap/Modal'
import UserAdmin from "../header/UserAdmin"
import MobileMenu from "../header/MobileMenu"
import { Col, Container, Row } from 'react-bootstrap'
import Cart from '../Cart/Cart'
import { cartData } from '../../data/cartData'
import { pageList } from '../../data/pageList'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    openModal() {
        this.setState({ showModal: true });
    }
    render() {

        return (
            <div className="header clearfix">
                <div className="top_header">
                    <Container>
                        <Row>
                            <Col md={6} sm={6} className="text-left left">
                                <h6>Custom Logo Watches & More, Free Shipping & Returns</h6>
                            </Col>
                            <Col md={6} sm={6} className="text-right right">
                                <ul>
                                    <li className="search_fl" onClick={this.openModal}><SearchIcon /></li>
                                    <Modal className="Search_fld" show={this.state.showModal} onHide={this.closeModal}>
                                        <Modal.Header closeButton>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <form>
                                                <input type="Search" placeholder="Search" />
                                                <button type="submit"><SearchIcon /></button>
                                            </form>
                                        </Modal.Body>
                                    </Modal>
                                    <li className="cart">
                                        <Cart cartData={cartData} />
                                    </li>
                                    <UserAdmin />
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bottom_header">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <nav className="navbar navbar-expand-lg">
                                    <Link className="navbar-brand" to="/e-commerce-demo"><img src={logo} alt="logo" /></Link>
                                    <div className="center_menu collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                                        <ul className="navbar-nav" id="listItem">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="/e-commerce-demo">Watches</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#/">Pages</Link>
                                                <ul className="dropdown_menu">
                                                    {
                                                        pageList.map((page, i) => {
                                                            return (
                                                                <li key={"pg-" + i}>
                                                                    <Link to={page.path}>{page.pageTitle}</Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                        <div className="contact_num">
                                            <PhoneInTalkIcon />
                                            <Link to='tel:18008626772'>1 (800) 862   6772 </Link>
                                        </div>
                                    </div>
                                    <MobileMenu />
                                </nav>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Header;