import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../../../store/actions/auth';

const Logout = (props) => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect (() => props.onLogout(), [])

    return <Redirect to='/' />
};
  
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authActions.authLogout())
    }
}
  
export default connect(null, mapDispatchToProps)(Logout);
export { Logout }