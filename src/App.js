import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';

import history from './utils/history';

import LayoutRoute from './containers/LayoutRoute';
import PrivateRoute from './containers/PrivateRoute';

import Layout from './components/Layout';
import LoginLayout from './components/LoginLayout';
import LoginPage from './containers/LoginPage';
import Cities from './components/Cities';
import Form from './containers/Form';

const App = () => (
    <Router history={ history }>
      <Switch>
        <PrivateRoute exact path='/cities' layout={Layout} component={Cities} />
        <PrivateRoute exact path='/cities/add' layout={Layout} component={Form} />
        <LayoutRoute exact path='/' layout={LoginLayout} component={LoginPage} />
        <Redirect to='/' />
      </Switch>
    </Router>
);

export default App;
