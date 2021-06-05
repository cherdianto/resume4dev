import React from 'react';
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions/authActions'
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'

const SignedInLinks = (props) => {
    return (
        <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/builder">Builder</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Button variant="outline-primary"><a href="/" onClick={props.signOut}>Sign Out</a></Button>
                    </Nav>
                </Navbar.Collapse>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
