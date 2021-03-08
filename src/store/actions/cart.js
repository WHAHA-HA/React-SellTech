import * as actionTypes from "./actionTypes"

export const addToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        product: product
    }
}

export const removeFromCart = (productId) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        productId: productId
    }
}

export const setCartProductQty = (value, productId) => {
    return {
        type: actionTypes.SET_CART_PRODUCT_QTY,
        value: value,
        productId: productId
    }
}

export const toggleAddedToCart = () => {
    return {
        type: actionTypes.TOGGLE_ADDED_TO_CART,
    }
}

export const setAddedToCartTimeout = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(toggleAddedToCart())
        }, 3000)
    }
}

