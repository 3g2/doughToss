import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Nav = () => (
    <div className="nav">
        <Link to="/" className="nav-style">
            <h1>Logo</h1>
        </Link>
        <ul className="nav-links">
            <Link to="/about" className="nav-style">
                <li>About</li>
            </Link>
            <Link to="/menu" className="nav-style">
                <li>Menu</li>
            </Link>
            <Link to="/contact" className="nav-style">
                <li>Contact</li>
            </Link>
        </ul>
    </div>
);

export default Nav;