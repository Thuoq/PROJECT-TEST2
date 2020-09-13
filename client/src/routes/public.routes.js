import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({ component, ...props }) => (
  <Route {...props} component={component} />
);

export default PublicRoute;
