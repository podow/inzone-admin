import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from '../utils/history';
import Test from './Test';
import Layout from './Layout';

const App = () => (
    <Layout>
        <Router history={ history }>
          <Switch>
            <Route exact path="/" component={ Test } />
            <Redirect to="/" />
          </Switch>
        </Router>
    </Layout>
);

export default App;