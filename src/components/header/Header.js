import React from 'react';
import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <header className="header">      
            <div className="header-content">
                <img 
                    src={logo} 
                    className="header-logo"
                    alt="Logo" 
                />
                <h1 className="header-title">
                    Welcome to <strong>Rick and Morty</strong> App
                </h1>
            </div>
        </header>
    );
}

export default Header;
