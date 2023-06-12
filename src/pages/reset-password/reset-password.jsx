import React from "react";
import ResetPassword from "../../components/reset-password/reset-password";
import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

const ResetPasswordPage = () => {
    const {forgotPasswordSuccess} = useSelector(state => state.forgotPassword);
    const location = useLocation();
    const from = location.state?.from.pathname || "/";

    if (!forgotPasswordSuccess) {
        return <Navigate to={from}/>;
    }

    return (
        <ResetPassword/>
    )
}

export default ResetPasswordPage;