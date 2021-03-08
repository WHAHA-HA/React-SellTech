import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as productsActions from '../../store/actions/products';

import ModalProductDetail from '../ModalProductDetail/ModalProductDetail';
import ProductsList from '../../Components/ProductsList/ProductsList';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Tabs from '../../Components/Navigation/Tabs/Tabs';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axiosProduct from '../../AxiosInstances/axios-product';

const Browse = (props) => {

    useEffect(() => {
        if (!props.products)
            props.onFetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!props.products || props.category === props.match.params.category)
            return
        props.onFilterProducts(props.match.params.category, props.products);
    }, [props, props.match.params.category])

    var productList = <Spinner />
    if (props.filteredProducts)
        productList = <ProductsList products={props.filteredProducts} clicked={props.onSelectProduct} />

    if (props.error)
        productList = (
            <div style={{textAlign: "center"}}>
                <h4> Looks like something has gone wrong! We are really sorry for inconvenience! Try refreshing or coming back latter.</h4>
            </div> 
        )

    return (
        <div>
            <Tabs />
            <ModalProductDetail />
            <div>
                {productList}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.productsState.products,
        filteredProducts: state.productsState.filteredProducts,
        category: state.productsState.category,
        error: state.productsState.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch(productsActions.fetchProducts()),
        onSelectProduct: (id) => dispatch(productsActions.setSelectedProducts(id)),
        onFilterProducts: (filterVal, products) => dispatch(productsActions.filterProduct(filterVal, products)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Browse, axiosProduct));