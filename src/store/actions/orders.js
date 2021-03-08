import * as actionTypes from './actionTypes'
import axiosProduct from '../../AxiosInstances/axios-product';

export const toggleLoading = () => {
    return {
        type: actionTypes.TOGGLE_LOADING,
    }
}

export const setOrders = (orders) => {
    const ordersArray = []
    for (var key in orders){
        ordersArray.push({
            ...orders[key],
            id: key
        })
    }
    return {
        type: actionTypes.SET_ORDERS,
        orders : ordersArray
    }
}

export const setOrderError = (error) => {
    return {
        type: actionTypes.SET_ORDER_ERROR,
        error: error
    }
}

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(toggleLoading())
        axiosProduct.get(`orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
        .then(res => {
            dispatch(setOrders(res.data))
            dispatch(toggleLoading())
        })
        .catch(err => {
            dispatch(toggleLoading())
            dispatch(setOrderError(err))            
        })
    }
}

export const toggleOrderSubmitted = () => {
    return {
        type: actionTypes.TOGGLE_ORDER_SUBMITTED,
    }
}

export const postOrder = (order, token) => {
    return dispatch => {
        dispatch(toggleLoading())
        axiosProduct.post(`orders.json?auth=${token}`, order)
        .then(res => {
            dispatch(toggleLoading())
            dispatch(toggleOrderSubmitted())
        })
        .catch(err => {
            dispatch(toggleLoading())
            dispatch(setOrderError(err))
        })
    }
}

