import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <div className="logo">LOGO</div>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/contact">
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Header;
