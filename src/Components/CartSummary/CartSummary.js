import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../UI/Button/Button';
import QtyCounter from '../UI/QtyCounter/QtyCounter';

import classes from "./CartSummary.module.css";

const cartSummary = (props) => {

    const productRows = props.orders.map(order => (
        <tr key={order.id}>
            <td style={{"textAlign": "left"}}>
                <div className={classes.CartProduct}>
                    <img src= {order.img} alt="product"/>
                    <h4>{order.title}</h4>
                </div>
            </td>
            <td>${order.price}</td>
            <td>
                <QtyCounter 
                    count={order.qty}
                    minusClicked={() => props.setCartProductQty(-1, order.id) }
                    plusClicked={() => props.setCartProductQty(1, order.id) } 
                />
            </td>
            <td><Button btnType="Danger" clicked={() => props.removeFromCart(order.id)}>Cancel</Button></td>
            <td>${order.qty * order.price}</td>
        </tr>
    ))

    return (
        <div className={classes.CartSummary}>
            <h2>My Cart</h2>
            <div>
                <table className={classes.CartTable}>
                    <thead>
                        <tr>
                            <th style={{"textAlign": "left"}}>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>{productRows}</tbody>
                </table>
            </div>
            <div className={classes.TotalsDetail}>
                <p><strong>Sub-Total:</strong><span>$ {props.subTotal}</span></p>
                <p><strong>Discount:</strong><span>{props.discount} %</span></p>
                <p><strong>Grand-Total:</strong><span>$ {props.subTotal - (props.discount * props.subTotal)}</span></p>
                <Button btnType="Primary" clicked={props.proceedCheckoutHandler}>Proceed To Checkout</Button>
                <Link className={classes.Link} to="/browse" >Continue Shopping!</Link>
            </div>
        </div>
    );
};

export default cartSummary;