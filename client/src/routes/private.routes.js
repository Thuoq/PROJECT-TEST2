import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isLogin} from '../helpers/auth';

const PrivateRoutes = ({component:Component,type,...props}) => {
    return(
        <Route {...props} render ={() => {
            if(!isLogin()) {
                return <Redirect to ="signInSignUp"/>
            }
            if(type === "signInSignUp" && isLogin()) {
                return <Redirect to ="/checkout"/>
            }
            return <Component/>
        }}/>
)}



export default (PrivateRoutes);