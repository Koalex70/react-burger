import {LOGIN_PATH} from "../../constants/constants";
import * as React from "react";
import {Navigate} from "react-router-dom";
import {useLocation} from "react-router-dom";

export const ProtectedRouteElement = ({element, isAuthRequire = false}) => {

    const location = useLocation();
    const from = location.state?.from.pathname || "/";

    if (isAuthRequire && localStorage.getItem('token') === null) {
        return <Navigate to={LOGIN_PATH} replace state={{ from: location }} />;
    }

    if (!isAuthRequire && localStorage.getItem('token') !== null) {
        return <Navigate to={from} />;
    }

    return element;
}