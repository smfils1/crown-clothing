import React from 'react'
import {connect} from "react-redux"
import {toggleCartHidden} from "../../redux/cart/cartActions"


import './CartIcon.scss'

const CartIcon = ({count, toggleCartHidden}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <div className="shopping-icon">Cart</div>
            <span className="item-count">{Number.isInteger(count) ? count : 0}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
