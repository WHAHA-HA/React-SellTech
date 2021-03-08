import * as actionTypes from './actionTypes';
import axiosAuth from '../../AxiosInstances/axios-auth';
import { config } from '../../projectConfig';

export const toggleAuthLoading = () => {
    return {
        type: actionTypes.TOGGLE_AUTH_LOADING,
    }
}

export const setAuthError = (error) => {
    return {
        type: actionTypes.SET_AUTH_ERROR,
        error: error
    }
}

export const setAuthData = (token, userId) => {
    return {
        type: actionTypes.SET_AUTH_DATA,
        idToken: token,
        userId: userId
    }
}

export const authLogout = () => {
    localStorage.removeItem('idToken')
    localStorage.removeItem('localId')
    localStorage.removeItem('expiresIn')
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const setLogoutTimeout = (expiresIn) => {
    return dispatch => {
        setTimeout(() => dispatch(authLogout()), expiresIn * 1000)
    }
}

export const SignUp = (email, password) => {
    return dispatch => {
        dispatch(toggleAuthLoading())
        const data = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axiosAuth.post(`accounts:signUp?key=${config.webApiKey}`, data)
        .then(res => {
            dispatch(setAuthData(res.data.idToken, res.data.localId))
        })
        .catch(err => {
            dispatch(setAuthError(err.response))
        })
    }
}

export const SignIn = (email, password) => {
    return dispatch => {
        dispatch(toggleAuthLoading())
        const data = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axiosAuth.post(`accounts:signInWithPassword?key=${config.webApiKey}`, data)
        .then(res => {
            localStorage.setItem("idToken", res.data.idToken)
            localStorage.setItem("localId", res.data.localId)
            localStorage.setItem("expiresIn", new Date(new Date().getTime() + res.data.expiresIn * 1000))
            dispatch(setAuthData(res.data.idToken, res.data.localId))
            dispatch(setLogoutTimeout(res.data.expiresIn))
        })
        .catch(err => {
            dispatch(setAuthError(err.response))
        })
    }
}

export const checkLocalAuthState = () => {
    return dispatch => {
        const idToken = localStorage.getItem('idToken')
        if (!idToken)
            dispatch(authLogout())
        else {
            const localId = localStorage.getItem('localId')
            const expiresIn = new Date(localStorage.getItem('expiresIn'))
            if (expiresIn > new Date()) {
                dispatch(setAuthData(idToken, localId))
                dispatch(setLogoutTimeout((expiresIn.getTime() - new Date().getTime()) / 1000))
            } else 
            dispatch(authLogout())
        }
    }
}

export const toggleCheckoutClicked = () => {
    return {
        type: actionTypes.TOGGLE_CHECKOUT_CLICKED,
    }
}