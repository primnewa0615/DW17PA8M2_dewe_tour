import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component, path }) => {
    return (
        <>
            {localStorage.getItem("token") && localStorage.getItem("email") == "admin@gmail.com" ? (<Redirect to="/home" />) :
                localStorage.getItem("token") ? (
                    <Route path={path} component={component} />) : (
                        <Redirect to="/" />)
            }
        </>
    );
}


export default PrivateRoute;