import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as ordersActions from '../../../store/actions/orders';

import FormField from '../../../Components/UI/FormField/FormField';
import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Modal from '../../../Components/UI/Modal/Modal';
import SpinnerMark from '../../../Components/UI/SuccessMark/SuccessMark';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

import { CheckoutFormConfig } from './CheckoutConfig';
import { validateForm, validateField } from '../../../shared/utility';
import axiosProduct from '../../../AxiosInstances/axios-product';

import classes from './CheckoutForm.module.css';

const CheckoutForm = (props) => {

    const [orderForm, setOrderForm] = useState(CheckoutFormConfig)
    const [isFormValid, setFormValidity] = useState(false)

    const submitOrderHandler = (event) => {
        event.preventDefault()

        const formData = {};
        for (let key in orderForm)
            formData[key] = orderForm[key].elementConfig.value;

        const order = {
            order : props.productsInCart,
            price : props.totalPrice,
            customer : {
                name : formData.name,
                address : {
                    houseNo: formData.house,
                    street : formData.street,
                    zipCode : formData.zipcode,
                },
                email : formData.email, 
            },
            userId: props.userId,
            deliveryMeethod : formData.deliveryMethod
        }

        props.onPostOrder(order, props.authToken)
    }

    const formValueChangeHandler = (event, fieldIdentifier) => {
        const updatedOrderForm = {
            ...orderForm,
            [fieldIdentifier] : {
                ...orderForm[fieldIdentifier],
                elementConfig: {
                    ...orderForm[fieldIdentifier].elementConfig,
                    value: event.target.value,
                },
                valid: validateField(event.target.value, orderForm[fieldIdentifier].validatingRules),
            }
        }
        const updatedFormValidity = validateForm(updatedOrderForm)
        setOrderForm(updatedOrderForm)
        setFormValidity(updatedFormValidity)
    }

    let form = (
        <form>
            {Object.keys(orderForm).map(el => (
                <FormField
                    key={el} 
                    label={orderForm[el].label}
                    elementType={orderForm[el].elementType}
                    elementConfig={orderForm[el].elementConfig}
                    options={orderForm[el].options}
                    required={orderForm[el].validatingRules.required}
                    invalid={!orderForm[el].valid}
                    invalidMessage={orderForm[el].validityMessage}
                    valueChanged={(event) => formValueChangeHandler(event, el)}
                />
            ))}
            <Button 
                btnType = "Success" 
                clicked={submitOrderHandler} 
                disabled={!isFormValid}
            >Order</Button>                
        </form>
    )
    
    if (props.loading)
        form = <Spinner />
    
    return (
        <div className={classes.CheckoutForm}>
            <Modal show={props.orderSubmitted} closed={props.onToggleOrderSubmitted} >
                { props.orderSubmitted && <SpinnerMark /> }
                <h4>Your Order has been set!!</h4>
                <p>It will be delievered to you in 6-7 bussiness days</p>
            </Modal>
            <h4>Enter Your Contact Data</h4>
            {form}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.ordersState.loading,
        productsInCart: state.cartState.products,
        totalPrice: state.cartState.totalPrice,
        orderSubmitted: state.ordersState.orderSubmitted,
        userId: state.authState.userId,
        authToken: state.authState.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPostOrder: (order, token) => dispatch(ordersActions.postOrder(order, token)),
        onToggleOrderSubmitted: () => dispatch(ordersActions.toggleOrderSubmitted())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(CheckoutForm, axiosProduct));