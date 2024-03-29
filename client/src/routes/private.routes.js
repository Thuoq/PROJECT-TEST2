import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../helpers/auth';

const PrivateRoutes = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={() => {
      if (!isLogin()) {
        return <Redirect to={{ pathname: '/checkout' }} />;
      }
      return <Component />;
    }}
  />
);

export default PrivateRoutes;
