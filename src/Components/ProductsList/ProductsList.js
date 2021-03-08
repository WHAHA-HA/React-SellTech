import React from 'react';

import ProductCard from './ProductCard/ProductCard';

import classes from './ProductsList.module.css';

const productsList = (props) => (
    <div className={classes.ProductsList}>
        {props.products.map(product => (
            <ProductCard key={product.id}
                product={product} 
                clicked={() => props.clicked(product.id)}
            />
        ))}
    </div>
);


export default productsList;