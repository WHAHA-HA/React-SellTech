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

import Spinner from './Components/UI/Spinner/Spinner';

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
      <Suspense fallback={<Spinner />}>
        <Switch >
          <Route data-testid="auth-routes" path="/" exact component={Main} />
          <Route data-testid="auth-routes" path="/browse/:category?" component={Browse} />
          <Route data-testid="auth-routes" path="/product" component={ProductPage} />
          <Route data-testid="auth-routes" path="/my-cart" component={Cart} />
          <Route data-testid="auth-routes" path="/authenticate" component={AuthForm} />
          <Route data-testid="auth-routes" path="/log-out" component={Logout} />
          <Route data-testid="auth-routes" path="/my-orders" component={MyOrders} />
        </Switch>
      </Suspense>

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
export { App }
