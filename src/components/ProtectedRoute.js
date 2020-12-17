import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../services/AuthService.js';

const ProtectedRoute = ({component: Component, ...props}) => {
    return <Route {...props} render={(p) => {
        const login = AuthService.getCurrentUser();
        if (login){
            return <Component />
        } else {
            //alert("You must log in!")
            return <Redirect to="/login"/>
        }
    }}/>
}
export default ProtectedRoute