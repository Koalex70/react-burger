import React, {FC} from "react";
import ResetPassword from "../../components/reset-password/reset-password";
import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import {getForgotPasswordState} from "../../services/actions/forgot-password";

const ResetPasswordPage:FC = () => {
    const {forgotPasswordSuccess} = useSelector(getForgotPasswordState);
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