import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand fs-4" href="/">
                    <img src={logo} className="img-fluid logo" alt="logo" />
                    e-Learning
                </a>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;