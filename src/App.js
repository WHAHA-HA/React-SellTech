import React, { Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from './store/actions/auth'

import Layout from './Container/Layout/Layout';
import Main from './Container/Main/Main';
import Browse from './Container/Browse/Browse';
import ProductPage from './Container/ProductPage/ProductPage';
import Cart from './Container/Cart/Cart';
import AuthForm from './Container/AuthForm/AuthForm';
import Logout from './Container/AuthForm/Logout/Logout';

const MyOrders = React.lazy(() => import('./Container/MyOrders/MyOrders'))

const App = (props) => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => props.onAutoLogIn(), [])

  var routes = (
    <Switch >
      <Route path="/" exact component={Main} />
      <Route path="/browse/:category?" component={Browse} />
      <Route path="/product" component={ProductPage} />
      <Route path="/my-cart" component={Cart} />
      <Route path="/authenticate" component={AuthForm} />
    </Switch>
  )

  if (props.isAuthenticated)
    routes = (
      <Switch >
        <Route path="/" exact component={Main} />
        <Route path="/browse/:category?" component={Browse} />
        <Route path="/product" component={ProductPage} />
        <Route path="/my-cart" component={Cart} />
        <Suspense fallback={<p>Loading...</p>}>
          <Route path="/my-orders" component={MyOrders} />
        </Suspense>
        <Route path="/log-out" component={Logout} />
      </Switch>
    )

  return (
    <Layout>
      {routes}
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authState.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAutoLogIn: () => dispatch(authActions.checkLocalAuthState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
