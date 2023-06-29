import {LOGIN_PATH} from "../../constants/constants";
import * as React from "react";
import {Navigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {FC, ReactElement} from "react";
import {TProtectedRouteElement} from "../../services/types";

export const ProtectedRouteElement: FC<TProtectedRouteElement> = ({element, isAuthRequire = false}): (ReactElement | null) => {

    const location = useLocation();
    const from = location.state?.from.pathname || "/";

    if (isAuthRequire && localStorage.getItem('token') === null) {
        return <Navigate to={LOGIN_PATH} replace state={{from: location}}/>;
    }

    if (!isAuthRequire && localStorage.getItem('token') !== null) {
        return <Navigate to={from}/>;
    }

    return element as ReactElement;
}