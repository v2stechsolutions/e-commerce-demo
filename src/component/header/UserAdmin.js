import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'


class UserAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    render() {
        return (
            <>
                <li onClick={this.open}>
                    <PersonOutlineIcon />
                </li>
                <Modal className="Search_fld logintab" show={this.state.showModal} onHide={this.close} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                            <Tab eventKey="home" title="Sign Up">
                                <div id="signup" >
                                    <h1>Sign Up for Free</h1>
                                    <form>
                                        <div className="top-row">
                                            <div className="field-wrap">
                                                <label>
                                                    First Name<span className="req">*</span>
                                                </label>
                                                <input type="text" required autocomplete="off" />
                                            </div>
                                            <div className="field-wrap">
                                                <label>
                                                    Last Name<span className="req">*</span>
                                                </label>
                                                <input type="text" required autocomplete="off" />
                                            </div>
                                        </div>
                                        <div className="field-wrap">
                                            <label>
                                                Email Address<span className="req">*</span>
                                            </label>
                                            <input type="email" required autocomplete="off" />
                                        </div>
                                        <div className="field-wrap">
                                            <label>
                                                Set A Password<span className="req">*</span>
                                            </label>
                                            <input type="password" required autocomplete="off" />
                                        </div>
                                        <a href="/e-commerce-demo">
                                            <button className="button button-block" type="button">Sign Up</button>
                                        </a>
                                    </form>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Login">
                                <div id="login">
                                    <h1>Welcome Back!</h1>
                                    <form>
                                        <div class="field-wrap">
                                            <label>
                                                Email Address<span class="req">*</span>
                                            </label>
                                            <input type="email" required autocomplete="off" />
                                        </div>
                                        <div class="field-wrap">
                                            <label>
                                                Password<span class="req">*</span>
                                            </label>
                                            <input type="password" required autocomplete="off" />
                                        </div>
                                        <p class="forgot"><a href="/e-commerce-demo">Forgot Password?</a></p>
                                        <a href="/e-commerce-demo">
                                            <button class="button button-block" type="button">Log In</button>
                                        </a>
                                    </form>
                                </div>
                            </Tab>
                        </Tabs>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default UserAdmin