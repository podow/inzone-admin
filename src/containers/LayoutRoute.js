import React from 'react';
import { Route } from 'react-router-dom';

const LayoutRoute = ({layout: Layout, component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <Layout>
        <Component {...matchProps} />
      </Layout>
    )} />
  )
};

export default LayoutRoute
