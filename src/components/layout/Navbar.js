import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

function navbar() {
    return (
        <>
            <Container fluid>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/">Resume4.dev</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/builder">Builder</Nav.Link>
                        <Nav.Link href="/signUp">Sign Up</Nav.Link>
                        <Nav.Link href="/signIn">Sign In</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </>
    )
}

export default navbar
