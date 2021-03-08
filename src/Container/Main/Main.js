import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as productsActions from '../../store/actions/products';

import ModalProductDetail from '../ModalProductDetail/ModalProductDetail';
import ImageSlider from '../../Components/UI/ImageSlider/ImageSlider';
import ProductsList from '../../Components/ProductsList/ProductsList';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axiosProduct from '../../AxiosInstances/axios-product';
import classes from './Main.module.css';

const Main = (props) => {

    useEffect(() => {
        props.onFetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    var mainContent = <Spinner />;
    if (props.featuredProducts && props.popularProducts) {

        const featuredProducts = <ProductsList products={props.featuredProducts} clicked={props.onSelectProduct} />
        const popularProducts = <ProductsList products={props.popularProducts} clicked={props.onSelectProduct} />

        mainContent = (
            <div className={classes.Main}>
                <h2>Featured Products</h2>
                <div >
                    {featuredProducts}
                </div>
                <h2>Popular Products</h2>
                <div>
                    {popularProducts}
                </div>
            </div>
        )
    }
    
    if (props.error)
        mainContent = (
            <div className={classes.Main}>
                <h4> Looks like something has gone wrong! We are really sorry for inconvenience! Try refreshing or coming back latter.</h4>
            </div> 
        )

    return (
        <React.Fragment >
            <ImageSlider darkOverlay/>
            <ModalProductDetail />
            {mainContent}
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        featuredProducts: state.productsState.featuredProducts,
        popularProducts: state.productsState.popularProducts,
        error: state.productsState.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch(productsActions.fetchProducts()),
        onSelectProduct: (id) => dispatch(productsActions.setSelectedProducts(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Main, axiosProduct));