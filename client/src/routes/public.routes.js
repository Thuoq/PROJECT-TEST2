import React from 'react';
import { Route } from 'react-router-dom';


const PublicRoute = ({component ,...props}) => {
    
    return (
    <Route  {...props}  component={component}/>
)}

export default PublicRoute;