import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from '../utils/history';
import Test from './Test';
import Layout from './Layout';

const App = () => (
    <Router history={ history }>
        <Layout>
          <Switch>
            <Route exact path="/" component={ Test } />
            <Redirect to="/" />
          </Switch>
        </Layout>
    </Router>
);

export default App;