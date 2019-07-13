import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from '../utils/history';
import Test from './Test';

const App = () => (
    <Router history={ history }>
      <Switch>
        <Route exact path="/" component={ Test } />
        <Redirect to="/" />
      </Switch>
    </Router>
);

export default App;