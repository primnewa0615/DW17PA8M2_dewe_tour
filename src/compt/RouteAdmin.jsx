import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const RouteAdmin = ({ component, path }) => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    return (
        <>
            {token && (email == "admin@gmail.com") ? (
                <Route path={path} component={component} />) : (
                    <PrivateRoute path={path} component={component} />)
            }
        </>
    );
}


export default RouteAdmin;