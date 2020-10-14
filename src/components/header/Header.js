import React from 'react';
import logo from '../../logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">      
            <div className="header-content">
                <img src={logo} className="header-logo" />
                <h1 className="header-title">Welcome to <strong>Rick and Morty</strong> Page</h1>
            </div>
        </header>
    );
};

export default Header;
