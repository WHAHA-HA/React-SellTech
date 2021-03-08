import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems} >
            <NavigationItem to="/" exact >Home</NavigationItem>
            <NavigationItem to="/browse" >Browse</NavigationItem>
            { props.isAuth && <NavigationItem to="/my-orders" >My Orders</NavigationItem> }
            <NavigationItem to="/my-cart" >
                <i className="fas fa-shopping-cart"></i>
                { props.itemsInCart !== 0 && <span className={classes.CartNotEmpty}>{props.itemsInCart}</span> }
            </NavigationItem>
            { props.isAuth ? <NavigationItem to="/log-out" >Log out</NavigationItem>
                :<NavigationItem to="/authenticate" >Sign in</NavigationItem> }
        </ul>
    );
};

export default navigationItems;