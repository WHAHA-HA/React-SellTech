import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as productsActions from '../../store/actions/products';
import * as cartActions from '../../store/actions/cart';

import ModalProductDetail from "../ModalProductDetail/ModalProductDetail";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import ProductsList from '../../Components/ProductsList/ProductsList';
import classes from './ProductPage.module.css';

const productPage = (props) => {

    var productList = null

    if (props.popularProducts)
        productList = <ProductsList products={props.popularProducts} clicked={props.onSelectProduct} />

    return (
        <div className={classes.Product}>
            { props.visitedProduct ? null: <Redirect to='/' /> }
            { props.visitedProduct ? 
                <ProductDetail 
                    order={props.visitedProduct} 
                    productQty = {props.productQty}
                    setProductQty = {props.onSetProductQty}
                    addToCartClicked = {props.onAddToCart}
                    openSuccessModal = {props.openSuccessModal}
                    toggleSuccessModal = {props.toggleSuccessModal}
                    setAddedToCartTimeout = {props.onSetAddedToCartTimeout} 
                    addedToCart = {props.addedToCart} 
                />
                : null }
            <hr/>
            <h4>You May Also Like</h4>
            <ModalProductDetail />
            {productList}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        popularProducts: state.productsState.popularProducts,
        selectedProduct: state.productsState.selectedProduct,
        visitedProduct: state.productsState.visitedProduct,
        openModal: state.productsState.openModal,
        productQty: state.productsState.productQty,
        addedToCart: state.cartState.addedToCart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectProduct: (id) => dispatch(productsActions.setSelectedProducts(id)),
        onToggleModal: () => dispatch(productsActions.toggleOpenModal()),
        onSetVisitedProduct : (selectedProduct) => dispatch(productsActions.setVisitedProduct(selectedProduct)),
        onSetProductQty: (value) => dispatch(productsActions.setProductQty(value)),
        onAddToCart: (product) => dispatch(cartActions.addToCart(product)),
        onSetAddedToCartTimeout: () => dispatch(cartActions.setAddedToCartTimeout())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(productPage));