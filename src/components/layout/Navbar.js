import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function navbar() {
    return (
        <>
            <Container fluid>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand><Link to="/">Resume4.dev</Link></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/builder">Builder</Link></Nav.Link>
                        <Nav.Link><Link to="/signUp">Sign Up</Link></Nav.Link>
                        <Nav.Link><Link to="/signIn">Sign In</Link></Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </>
    )
}

export default navbar
