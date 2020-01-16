import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import { auth } from "../../firebase/utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

import "./Header.scss";
const Header = ({ currentUser, cartHidden }) => {
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
                {currentUser ? (
                    <Link
                        className="option"
                        onClick={() => {
                            auth.signOut()
                            
                        }}
                        to="/signin"
                    >
                        SignOut
                    </Link>
                ) : (
                    <Link className="option" to="/signin">
                        SignIn
                    </Link>
                )}
                <CartIcon/>
            </div>
            {cartHidden || <CartDropdown />}
        </div>
    );
};

const mapStateToProps = state => ({
    currentUser:state.user.currentUser,
    cartHidden:state.cart.hidden,
})



export default connect(mapStateToProps)(Header);
