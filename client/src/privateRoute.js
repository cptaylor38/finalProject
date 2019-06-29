import React, { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from "./utils/Auth";
import App from './utils/firebase';
import firebase from 'firebase/app';

console.log('privateRoute.js');

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);

    console.log(RouteComponent);

    return (
        <Route
            {...rest}
            render={routeProps =>
                currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                        <Redirect to={"/login"} />
                    )}
        />
    )
};

export default PrivateRoute;