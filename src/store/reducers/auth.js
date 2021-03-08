import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: null,
    isCheckoutClicked: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case actionTypes.SET_AUTH_DATA:
            return {
                ...state,
                token: action.idToken,
                userId: action.userId,
                loading: false,
                error: null,
            }
        case actionTypes.TOGGLE_AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.SET_AUTH_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
                isCheckoutClicked: false
            }
        case actionTypes.TOGGLE_CHECKOUT_CLICKED:
            return {
                ...state,
                isCheckoutClicked: !state.isCheckoutClicked
            }
    }
}

export default reducer;