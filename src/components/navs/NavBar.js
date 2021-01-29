import { React } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../images/language.png';


const NavBar = (props) => {
    const renderSignupColor = (props) => {
        let buttonColor;
        const url = props.location.pathname
        if (url === '/signup') {
            buttonColor = 'active-button'
        } else {
            buttonColor = ''
        }
        return buttonColor;
    }

    const renderLoginColor = (props) => {
        let buttonColor;
        const url = props.location.pathname
        if (url === '/login') {
            buttonColor = 'active-button'
        } else {
            buttonColor = ''
        }
        return buttonColor;
    }

    return (
        <>
            <Navbar>
                <Navbar.Brand className="nav-title" href="/">
                    Teacher's Pet
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link>
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Language Logo"
                        />
                    </Nav.Link>
                    <Nav.Link className={`login ${renderLoginColor(props)}`} href="/login">Login</Nav.Link>
                    <Nav.Link className={`signup ${renderSignupColor(props)}`} href="/signup">Sign up</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;