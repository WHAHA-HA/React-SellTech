import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';

import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {

    const classesName = [classes.SideDrawer]
    props.open ? classesName.push(classes.Open) : classesName.push(classes.Closed)

    return (
        <React.Fragment >
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={classesName.join(' ')}>
                <Logo fontSize="30px" />
                <hr />
                <nav>
                    <NavigationItems itemsInCart={props.itemsInCart} isAuth={props.isAuthenticated} />
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;