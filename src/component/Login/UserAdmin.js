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
                              <Registration />  
                            </Tab>
                            <Tab eventKey="profile" title="Login">
                               <Login />
                            </Tab>
                        </Tabs>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default UserAdmin