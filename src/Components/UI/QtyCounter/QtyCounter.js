import React from 'react';

import classes from  "./QtyCounter.module.css"

const qtyCounter = (props) => {
    return (
        <div className={classes.QtyCounter}>
            <button onClick={props.minusClicked} disabled={props.count === 1} >-</button>
            <p>{props.count}</p>
            <button onClick={props.plusClicked} >+</button>
        </div>
    );
};

export default qtyCounter;