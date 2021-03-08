import * as actionTypes from "../actions/actionTypes";

const initialState = {
    orders : [],
    loading: false,  //for showing added to cart message
    orderSubmitted: false,   //for showing successful order submission
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case actionTypes.TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading,
            }
        case actionTypes.SET_ORDERS:
            return {
                ...state,
                orders: action.orders,
                error: null,
            }
        case actionTypes.TOGGLE_ORDER_SUBMITTED:
            return {
                ...state,
                orderSubmitted: !state.orderSubmitted,
                error: null,
            }
        case actionTypes.SET_ORDER_ERROR:
            return {
                ...state,
                error: action.error
            }
    }
}

export default reducer;