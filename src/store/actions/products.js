import * as actionTypes from './actionTypes';
import axiosProduct from '../../AxiosInstances/axios-product';

export const setProducts = (products) => {
    const productsArray = []
    for (var key in products){
        productsArray.push({
            ...products[key],
            id: key
        })
    }
    return {
        type: actionTypes.SET_PRODUCTS,
        products : productsArray
    }
}

export const setSelectedProducts = (selectedProductId) => {
    return {
        type: actionTypes.SET_SELECTED_PRODUCTS,
        selectedProductId: selectedProductId
    }
}

export const setVisitedProduct = (selectedProduct) => {
    return {
        type: actionTypes.SET_VISITED_PRODUCT,
        visitedProduct: selectedProduct
    }
}

export const toggleOpenModal = () => {
    return {
        type: actionTypes.TOGGLE_OPEN_MODEL,
    }
}

export const setError = (error) => {
    return {
        type: actionTypes.SET_ERROR,
        error: error
    }
}

export const fetchProducts = () => {
    return dispatch => {
        axiosProduct.get("/products.json")
        .then (res => {
            dispatch(setProducts(res.data))
        })
        .catch (err => (
            dispatch(setError(err))
        ))
    }
}

export const filterProduct = (filterVal, products) => {
    console.log("in filter")
    var filteredProducts = products
    if (filterVal !== undefined)
        filteredProducts = products.filter(prod => prod.category === filterVal)
    return {
        type: actionTypes.SET_FILTERED_PRODUCT,
        filteredProducts: filteredProducts,
        category: filterVal,
    }
}

export const setProductQty = (value) => {
    return {
        type: actionTypes.SET_PRODUCT_QTY,
        value: value
    }
}