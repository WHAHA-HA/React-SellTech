import React from 'react';

import classes from './OrderCard.module.css';

const orderCard = (props) => {

    const productRows = props.order.order.map(ord => (
        <tr key={ord.id}>
            <td style={{"textAlign": "left"}}>{ord.title}</td>
            <td>${ord.price}</td>
            <td>{ord.qty}</td>
            <td>${ord.qty * ord.price}</td>
        </tr>
    ))

    return (
        <div className={classes.OrderCard}>
            <h2>Order</h2>
            <table className={classes.OrderTable}>
                <thead>
                    <tr>
                        <th style={{"textAlign": "left"}}>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>{productRows}</tbody>
            </table>
            <p className={classes.PriceDetail}>
                Grand Total: <strong>$ {props.order.price}</strong>
            </p>        
        </div>
    );
};

export default orderCard;