import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

function navbar(props) {
    const { authError, user } = props;

    const links = user ? <SignedInLinks/> : <SignedOutLinks />;

    return (
        <Container fluid>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">Resume4.dev</Navbar.Brand>
                { links }
            </Navbar>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(navbar);
