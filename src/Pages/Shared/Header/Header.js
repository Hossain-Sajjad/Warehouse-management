import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Link className='header-tittle' to="/">Hossain Electronics</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/manageitems">Manage Items</Nav.Link>
                        <Nav.Link href="aditems">Add Items</Nav.Link>
                        <Nav.Link href="/myitems">My Items</Nav.Link>
                        <Nav.Link href="/login">Log In</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;