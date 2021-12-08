import React from 'react';

function Header(){
    return(
        <header>
            <a className="main-logo-link"></a>
            <nav className="header-content">
                <a className="header-link">Stays</a>
                <a className="header-link">Attractions</a>
                <a className="header-icon night-icon"></a>
                <a className="header-icon account-icon"></a>
                <a className="header-icon menu-icon"></a>
            </nav>
        </header>
    );
}

export default Header;
