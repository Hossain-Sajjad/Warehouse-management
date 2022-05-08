import React from 'react';

const Footer = () => {
    return (

        <div className="container">
            <footer className="py-2 my-2">
                <ul className="nav justify-content-center border-top pb-3 mb-3">
                    <li className="nav-item"><a href="/home" className="mt-3 nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="/myitems" className="mt-3 nav-link px-2 text-muted">My Items</a></li>
                    <li className="nav-item"><a href="/login" className="mt-3 nav-link px-2 text-muted">Login</a></li>
                    <li className="nav-item"><a href="/register" className="mt-3 nav-link px-2 text-muted">Register</a></li>
                </ul>
                <p className="text-center text-muted">© 2021 Hossain Sajjad</p>
            </footer>
        </div>

    );
};

export default Footer;