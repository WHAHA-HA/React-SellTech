import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as ordersActions from '../../store/actions/orders';

import OrderCard from '../../Components/OrderCard/OrderCard';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axiosProduct from '../../AxiosInstances/axios-product';

import classes from './MyOrders.module.css';

const MyOrders = (props) => {

    useEffect(() => {
        props.onFetchOrders(props.authToken, props.userId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    var orders = <Spinner />

    if (!props.loading)
        orders = (
            props.orders.map(order => (
                <OrderCard key={order.id} order={order} />
            ))
        )

    if (props.error)
        orders = <h4>Looks like something has gone wrong! We are really sorry for inconvenience! Try refreshing or coming back latter.</h4>
    
    return (
        <div className={classes.MyOrders} >
            <h2>My Orders</h2>
            {orders}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.ordersState.loading,
        orders: state.ordersState.orders,
        error: state.ordersState.error,
        userId: state.authState.userId,
        authToken: state.authState.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(ordersActions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(MyOrders, axiosProduct));