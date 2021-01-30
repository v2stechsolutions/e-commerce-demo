import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import Registration from './Registration'
import Login from './Login'
class UserAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            isLoginIn:false,
        }
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    componentDidMount(){
        let isLoginIn=window.localStorage.getItem('access_token');
        this.setState({ isLoginIn: !!isLoginIn })
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    HandleLogout = () => {
        window.localStorage.setItem('access_token', "")
        this.setState({ isLoginIn: false })
    }
    
    loginSuccess = () => {
        this.setState({ isLoginIn: true })
    }

    render() {
        const { isLoginIn } = this.state
        return (
            <>
                {!isLoginIn ? (<li onClick={this.open}>
                    <PersonOutlineIcon />
                </li>) : <li onClick={() => this.HandleLogout()}>
                        <p style={{ color: "white" }}>Sign out</p>
                    </li>}
                <Modal className="Search_fld logintab" show={this.state.showModal} onHide={this.close} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                            <Tab eventKey="home" title="Sign Up">
                              <Registration />  
                            </Tab>
                            <Tab eventKey="profile" title="Login">
                                <Login
                                    closeModal={this.close}
                                    loginSuccess={this.loginSuccess}
                                />
                            </Tab>
                        </Tabs>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default UserAdmin