import React, {useEffect, useState} from "react";
import {EmailInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './forgot-password.module.css';
import {LOGIN_PATH, RESET_PASSWORD_PATH} from "../../constants/constants";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {postForgotPassword, SET_FORGOT_PASSWORD_INITIAL_STATE} from "../../services/actions/forgot-password";

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const {forgotPasswordSuccess} = useSelector(state => state.forgotPassword);
    const navigate = useNavigate();

    const submit = () => {
        if (!email) return;
        dispatch(postForgotPassword(email));
    }

    useEffect(() => {
        if (forgotPasswordSuccess) {
            dispatch({
                type: SET_FORGOT_PASSWORD_INITIAL_STATE
            });
            navigate(RESET_PASSWORD_PATH);
        }
    }, [forgotPasswordSuccess, dispatch, navigate]);

    return (
        <div className={styles.form}>
            <h3 className="text text_type_main-medium mb-6">Восстановление пароля</h3>
            <EmailInput value={email} onChange={e => setEmail(e.target.value)} extraClass="mb-6"/>
            <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20" onClick={submit}>
                Восстановить
            </Button>
            <div>
                <span className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</span>
                <Button htmlType="button" type="secondary" size="medium" onClick={() => {
                    navigate(LOGIN_PATH)
                }} extraClass="m-1 p-1">
                    Войти
                </Button>
            </div>
        </div>
    )
}

export default ForgotPassword;