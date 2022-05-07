import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Link className='header-tittle' to="/">Hossain Electronics</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/manageitems">Manage Items</Nav.Link>
                        <Nav.Link href="/additem">Add Items</Nav.Link>
                        <Nav.Link href="/myitems">My Items</Nav.Link>
                        {
                            user ?
                                <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                                :
                                <Nav.Link href="/login">Login</Nav.Link>

                        }
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;