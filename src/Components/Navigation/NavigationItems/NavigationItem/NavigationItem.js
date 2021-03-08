import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink activeClassName={classes.active} to={props.to} exact={props.exact}>{props.children}</NavLink>
        </li>
    );
};

export default navigationItem;