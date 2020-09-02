import React from 'react';
import { Route } from 'react-router-dom';


const PublicRoute = ({path,component,...props}) => (
    <Route  {...props} path = {path} component ={component} />
)

export default PublicRoute;