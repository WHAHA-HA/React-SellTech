import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: null,
    popularProducts: null,
    featuredProducts: null,
    filteredProducts: null,
    selectedProduct : null, // for showing product on modal
    visitedProduct: null, // for showing product on product-page
    openModal: false,
    category: null,
    error: null,
    productQty: 1, // for show casing product before adding it to cart
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
                featuredProducts: action.products.filter(prod => prod.featured),
                popularProducts: action.products.slice(0, 3),
                error: null,
            }
        case actionTypes.SET_SELECTED_PRODUCTS:
            return {
                ...state,
                selectedProduct: state.products.find(prod => prod.id === action.selectedProductId),
                openModal: true,
                productQty: 1
            }
        case actionTypes.TOGGLE_OPEN_MODEL:
            return {
                ...state,
                openModal: !state.openModal,
                productQty: 1
            }
        case actionTypes.SET_FILTERED_PRODUCT:
            return {
                ...state,
                filteredProducts: action.filteredProducts,
                category: action.category
            }
        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.SET_VISITED_PRODUCT:
            return {
                ...state,
                visitedProduct: action.visitedProduct,
                productQty: 1
            }
        case actionTypes.SET_PRODUCT_QTY:
            return {
                ...state,
                productQty: state.productQty + action.value
            }
    }
}

export default reducer;