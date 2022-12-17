import React from "react";
//import useHistory from "react-router-dom";
import Container from 'react-bootstrap/Container';
//import PropTypes from "prop-types";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from "react-bootstrap";
import { signOutUser } from "../Utils/auth";

export const Navigation = ({ user }) => {
    //const history = useHistory();
   
    return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/recipes">Recipes</Nav.Link>
                    <Nav.Link href="/schedule">Schedule</Nav.Link>
                    
                    
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <Button type='button' onClick={signOutUser}> Sign Out </Button>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
/*
Navigation.defaultProps = {
    user: null,
};

Navigation.propTypes = {
    user: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            uid: PropTypes.string,
            user: PropTypes.string,

        }),
    ]),
}
*/