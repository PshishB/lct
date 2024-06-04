import React from "react";

import "./header.css";

const Header = ({onTabClick}) => {
    return (
        <header className="app__header header">
            <nav className="header__nav nav">
                <button className="nav__button" onClick={() =>onTabClick('map')}>Карта</button>
                <button className="nav__button" onClick={() =>onTabClick('graph')}>График</button>
            </nav>
        </header>
    )
}

export default Header;