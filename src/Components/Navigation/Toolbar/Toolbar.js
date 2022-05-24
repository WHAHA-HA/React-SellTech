import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';
import Logo from '../../Logo/Logo';

import classes from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar} data-testid="toolbar">
            <DrawerToggler clicked={props.burgerClicked} />
            <Logo fontSize="25px" />
            <nav>
                <NavigationItems itemsInCart={props.itemsInCart} isAuth={props.isAuthenticated} />
            </nav>            
        </header>
    );
};

export default toolbar;