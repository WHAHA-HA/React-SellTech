import * as actionTypes from "../actions/actionTypes";

const initialState = {
    products : [],
    totalPrice: 0,
    addedToCart: false,  //for showing added to cart message
}

const setProductQty = (products, productId, value) => {
    const index = products.findIndex(prod => prod.id === productId)
    products[index].qty += value
    return [...products]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                products: state.products.concat(action.product),
                totalPrice: state.totalPrice + (action.product.price * action.product.qty),
                addedToCart: true,
            }
        case actionTypes.REMOVE_FROM_CART:
            const removableObj = state.products.find(prod => prod.id === action.productId)
            return {
                ...state,
                products: state.products.filter(prod => prod !== removableObj),
                totalPrice: state.totalPrice - (removableObj.price * removableObj.qty)
            }
        case actionTypes.SET_CART_PRODUCT_QTY:
            return {
                ...state,
                products: setProductQty(state.products, action.productId, action.value),
                totalPrice: state.totalPrice + action.value * state.products.find(prod => prod.id === action.productId).price
            }
        case actionTypes.TOGGLE_ADDED_TO_CART:
            return {
                ...state,
                addedToCart: !state.addedToCart,
            }
    }
}

export default reducer;