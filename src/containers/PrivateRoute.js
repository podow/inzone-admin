import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { receiveAuth } from '../actions/auth';

const PrivateRoute = ({ layout: Layout, component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={ props => (
    isAuthenticated ? (
      <Layout>
        <Component {...props} />
      </Layout>
    ) : (
      <Redirect to='/' />
  )) } />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  receiveAuth: dispatch(receiveAuth())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));
