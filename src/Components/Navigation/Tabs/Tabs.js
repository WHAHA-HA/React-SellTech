import React from 'react';

import TabItem from './TabItem/TabItem';

import classes from './Tabs.module.css';

const tabs = () => {
    return (
        <ul className={classes.Tabs}>
            <TabItem to="/browse" exact >All</TabItem>
            <TabItem to="/browse/laptop" >Laptops</TabItem>
            <TabItem to="/browse/mobile" >Mobiles</TabItem>
            <TabItem to="/browse/accessories" >Accessories</TabItem>
        </ul>
    );
};

export default tabs;