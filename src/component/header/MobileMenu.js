import React from 'react'
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import { pageList } from '../../data/pageList';

class MobileMenu extends React.Component {
    render() {
        return (
            <>
                <Navbar className="mobile_menu" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="nav-link" to="/">Watches</Link>
                            <NavDropdown title="Pages" id="collasible-nav-dropdown">
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
                            </NavDropdown>
                            <Link className="nav-link" to="/contact">Contact</Link>
                            <div className="contact_num">
                                <PhoneInTalkIcon />
                                <a href='tel:18008626772'>1 (800) 862   6772 </a>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default MobileMenu