import React from 'react';

import classes from './ProductCard.module.css';

const productCard = (props) => {
    return (
        <div className={classes.ProductCard} onClick={props.clicked}>
            {props.product.sale && <p className={[classes.Tag, classes.Sale].join(" ")}>SALE</p>}
            {props.product.featured && <p className={[classes.Tag, classes.Featured].join(" ")}>FEATURED</p>}
            <img src={props.product.img} alt={props.product.title} />
            <button>QUICK VIEW</button>
            <hr />
            <p>{props.product.title}</p>
            <p><strong>${props.product.price}</strong></p>
        </div>
    );
};

export default productCard;