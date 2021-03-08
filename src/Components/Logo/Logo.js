import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Logo.module.css';

const logo = (props) => (
    <Link to="/" style={ props.fontSize && {fontSize: props.fontSize} } className={classes.Logo}>SellTech</Link>
);

export default logo;