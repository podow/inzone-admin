import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';

import history from './utils/history';

import Layout from './components/Layout';
import LoginLayout from './components/LoginLayout';
import LoginPage from './containers/LoginPage';
import Test from './components/Test';

import LayoutRoute from './containers/LayoutRoute';
import PrivateRoute from './containers/PrivateRoute';

const App = () => (
    <Router history={ history }>
      <Switch>
        <PrivateRoute exact path='/dashboard' layout={Layout} component={Test} />
        <LayoutRoute exact path='/' layout={LoginLayout} component={LoginPage} />
        <Redirect to='/' />
      </Switch>
    </Router>
);

export default App;
