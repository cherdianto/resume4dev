import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'

function SignedOutLinks() {
    return (
        <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Button variant="outline-primary"><Nav.Link as={Link} to="/signIn">Sign In</Nav.Link></Button>
                    </Nav>
                </Navbar.Collapse>
        </>
    )
}

export default SignedOutLinks;
