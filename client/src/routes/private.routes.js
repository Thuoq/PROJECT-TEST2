import React from 'react';
import { Route } from 'react-router-dom';


const PrivateRoutes = ({path,component}) => (
    <Route path = {path} component ={component} />
)

export default PrivateRoutes;