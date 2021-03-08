import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './TabItem.module.css';

const tabItem = (props) => {
    return (
        <li className={classes.TabItem}>
            <NavLink activeClassName={classes.active} to={props.to} exact={props.exact}>{props.children}</NavLink>
        </li>
    );
};

export default tabItem;