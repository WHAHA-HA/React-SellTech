import React from 'react';
import { Link } from 'react-router-dom';

import QtyCounter from '../UI/QtyCounter/QtyCounter';
import Button from '../UI/Button/Button';

import classes from './ProductDetail.module.css';

const ProjectDetail = props => {
    const addToCartHandler = () => {
        props.addToCartClicked({
            ...props.order,
            qty: props.productQty
        })
        props.setAddedToCartTimeout()
    }

    return (
        <React.Fragment>
            { props.addedToCart && <div className={classes.SuccessMessage} >Product has been added to Cart.</div> }
            <div className={classes.ProductDetail}>
                <img src={props.order.img} alt="product img" />
                <div className={classes.Detail}>
                    <p>{props.order.title}</p>
                    <hr />
                    <p><strong>${props.order.price}</strong></p>
                    <p>{props.order.description}</p>
                    <QtyCounter 
                        count={props.productQty} 
                        minusClicked={() => props.setProductQty(-1) }
                        plusClicked={() => props.setProductQty(1) }
                    />
                    <Button btnType="Success" 
                        clicked={addToCartHandler} >
                            Add to Cart
                    </Button>
                    { props.fromModal && 
                        <Button btnType="Primary" clicked={props.visitClicked}>
                            Visit Detailed View
                        </Button>
                    }
                    <Link className={classes.Link} to="/browse" >Continue Shopping!</Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProjectDetail;