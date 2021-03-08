import React from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as cartActions from '../../store/actions/cart';
import * as authActions from '../../store/actions/auth';

import CheckoutForm from './CheckoutForm/CheckoutForm';

import CartSummary from '../../Components/CartSummary/CartSummary';

const Cart = (props) => {

    const continueCheckoutHandler = () => {
        props.onToggleCheckoutClicked()
        if (props.isAuthenticated)
            props.history.replace("/my-cart/checkout")
        else
            props.history.replace("/authenticate")
    }

    var content = <h2 style={{textAlign: "center", padding: "50px 0"}} >Your Cart is Empty!</h2>

    if (props.productsInCart.length) {
        content = (
            <div>
                <CartSummary 
                    orders={props.productsInCart}
                    removeFromCart = {props.onRemoveFromCart}
                    setCartProductQty={props.onSetCartProductQty}
                    subTotal={props.totalPrice}
                    discount={0}
                    proceedCheckoutHandler = {continueCheckoutHandler}
                />
                <Route path={ props.match.url + '/checkout' } component={CheckoutForm}/>
            </div>
        )
    }

    return content;
};

const mapStateToProps = state => {
    return {
        productsInCart: state.cartState.products,
        totalPrice: state.cartState.totalPrice,
        isAuthenticated: state.authState.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveFromCart: (productId) => dispatch(cartActions.removeFromCart(productId)),
        onSetCartProductQty: (value, productId) => dispatch(cartActions.setCartProductQty(value, productId)),
        onToggleCheckoutClicked: () => dispatch(authActions.toggleCheckoutClicked())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);