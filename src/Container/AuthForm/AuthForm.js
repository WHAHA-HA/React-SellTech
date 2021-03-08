import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import * as authActions from '../../store/actions/auth';

import FormField from '../../Components/UI/FormField/FormField';
import Button from '../../Components/UI/Button/Button';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Logo from '../../Components/Logo/Logo';

import { authFormConfig } from './AuthFormConfig';
import { validateField, validateForm } from '../../shared/utility';

import classes from './AuthForm.module.css';

const AuthForm = (props) => {

    const [authForm, setAuthForm] = useState(authFormConfig)
    const [signInMode, setSignInMode] = useState(true)
    const [isFormValid, setFormValidity] = useState(false)

    const submitFormHandler = (event) => {
        event.preventDefault()
        const email = authForm.email.elementConfig.value
        const password = authForm.password.elementConfig.value

        if (signInMode)
            props.onSignIn(email, password)
        else
            props.onSignUp(email, password)
    }

    const formValueChangeHandler = (event, fieldIdentifier) => {
        const updatedAuthForm = {
            ...authForm,
            [fieldIdentifier] : {
                ...authForm[fieldIdentifier],
                elementConfig: {
                    ...authForm[fieldIdentifier].elementConfig,
                    value: event.target.value,
                },
                valid: validateField(event.target.value, authForm[fieldIdentifier].validatingRules),
            }
        }
        const updatedFormValidity = validateForm(updatedAuthForm)
        setAuthForm(updatedAuthForm)
        setFormValidity(updatedFormValidity)
    }

    let authRedirect = (
        props.isAuthenticated ? 
        <Redirect
            to={props.isDirectedFromCheckout ? "/my-cart/checkout" : "/"}
        />:null
    )

    let form = <Spinner />

    if (!props.loading)
        form = (
            <form >
                {Object.keys(authForm).map(el => (
                    <FormField
                        key={el} 
                        label={authForm[el].label}
                        elementType={authForm[el].elementType}
                        elementConfig={authForm[el].elementConfig}
                        options={authForm[el].options}
                        required={authForm[el].validatingRules.required}
                        invalid={!authForm[el].valid}
                        invalidMessage={authForm[el].validityMessage}
                        valueChanged={(event) => formValueChangeHandler(event, el)}
                    />
                ))}
                <Button 
                    btnType = "Success"
                    clicked = {(e) => submitFormHandler(e)}
                    disabled={!isFormValid}
                >{signInMode ? "Sign In" : "Sign Up"}</Button>                
            </form>
        )

    return (
        <div className={classes.AuthForm}>
            { authRedirect }
            <h1>{signInMode ? "Sign In" : "Sign Up" } to <span><Logo/></span></h1>
            <p> { signInMode ? "Don'\t have an account?" : "Have an account?" }  
                <span 
                    className={classes.SignUpLink}
                    onClick={() => setSignInMode(prev => !prev)}
                >                        
                    { signInMode ? "Sign Up" : "Sign In" }
                </span>
            </p>
            <hr />
            { props.error && <p className={classes.Error}>{ props.error.data.error.message }</p> }
            {form}
        </div>
    );
};

export const mapStateToProps = state => {
    return {
        loading: state.authState.loading,
        error: state.authState.error,
        isAuthenticated: state.authState.token !== null,
        isDirectedFromCheckout: state.authState.isCheckoutClicked,
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (email, password) => dispatch(authActions.SignUp(email, password)),
        onSignIn: (email, password) => dispatch(authActions.SignIn(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);