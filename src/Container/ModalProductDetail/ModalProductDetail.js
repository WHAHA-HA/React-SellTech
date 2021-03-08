import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as productsActions from '../../store/actions/products';
import * as cartActions from '../../store/actions/cart';

import ProjectDetail from '../../Components/ProductDetail/ProductDetail';
import Modal from '../../Components/UI/Modal/Modal';

const ModalProductDetail = (props) => {

    const visitedClicked = () => {
        props.onToggleModal()
        props.onSetVisitedProduct(props.selectedProduct)
        props.history.push('/product')
    }

    var modalContent = null;

    if (props.selectedProduct) {
        modalContent = (
            <ProjectDetail 
                order={props.selectedProduct} 
                visitClicked={visitedClicked}
                productQty = {props.productQty}
                setProductQty = {props.onSetProductQty}
                addToCartClicked = {props.onAddToCart}
                addedToCart = {props.addedToCart}
                setAddedToCartTimeout = {props.onSetAddedToCartTimeout} 
                fromModal
            />
        )
    }

    return (
        <Modal show={props.openModal} closed={props.onToggleModal}>
            {modalContent}
        </Modal>
    );
};

const mapStateToProps = state => {
    return {
        openModal: state.productsState.openModal,
        selectedProduct: state.productsState.selectedProduct,
        productQty: state.productsState.productQty,
        addedToCart: state.cartState.addedToCart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleModal: () => dispatch(productsActions.toggleOpenModal()),
        onSetVisitedProduct : (selectedProduct) => dispatch(productsActions.setVisitedProduct(selectedProduct)),
        onSetProductQty: (value) => dispatch(productsActions.setProductQty(value)),
        onAddToCart: (product) => dispatch(cartActions.addToCart(product)),
        onSetAddedToCartTimeout: () => dispatch(cartActions.setAddedToCartTimeout())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalProductDetail));