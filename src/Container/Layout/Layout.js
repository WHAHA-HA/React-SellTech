import React, {useState} from 'react';
import { connect } from 'react-redux';

import Footer from '../../Components/Footer/Footer';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

const Layout = (props) => {

    const [openSideDrawer, setSideDrawer] = useState(false);

    const toggleSideDrawer = () => (
        setSideDrawer(prevState => !prevState)
    )

    return (
        <React.Fragment >
            <Toolbar 
                isAuthenticated={props.isAuthenticated} 
                itemsInCart={props.itemsInCart} 
                burgerClicked={toggleSideDrawer}
            />
            <SideDrawer 
                isAuthenticated={props.isAuthenticated} 
                itemsInCart={props.itemsInCart} 
                open={openSideDrawer} 
                closed={toggleSideDrawer} />
            <main className={classes.Main}>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        itemsInCart: state.cartState.products.length,
        isAuthenticated: state.authState.token !== null,
    }
}

export default connect(mapStateToProps)(Layout);