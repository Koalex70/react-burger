import React, {useEffect, useState} from "react";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './reset-password.module.css';
import {LOGIN_PATH} from "../../constants/constants";
import {useNavigate} from "react-router-dom";
import PasswordInput from "../password-input/password-input";
import {useDispatch, useSelector} from "react-redux";
import {
    getResetPasswordState,
    postResetPassword,
    SET_RESET_PASSWORD_INITIAL_STATE
} from "../../services/actions/reset-password";
import {SET_FORGOT_PASSWORD_INITIAL_STATE} from "../../services/actions/forgot-password";

const ResetPassword = () => {

    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {resetPasswordSuccess} = useSelector(getResetPasswordState);

    const submit = (e) => {
        e.preventDefault();

        if (!code || !password) return;

        dispatch(postResetPassword({
            'token': code,
            'password': password
        }));
    }

    useEffect(() => {
        if (resetPasswordSuccess) {
            dispatch({
                type: SET_FORGOT_PASSWORD_INITIAL_STATE
            });
            dispatch({
                type: SET_RESET_PASSWORD_INITIAL_STATE
            });
            navigate(LOGIN_PATH);
        }
    }, [dispatch, resetPasswordSuccess, navigate]);

    return (
        <div className={styles.form}>
            <h3 className="text text_type_main-medium mb-6">Восстановление пароля</h3>
            <form onSubmit={submit}>
                <PasswordInput value={password} onChange={e => setPassword(e.target.value)}
                               placeholder={'Введите новый пароль'}/>
                <Input value={code} placeholder='Введите код из письма' onChange={e => setCode(e.target.value)}
                       extraClass="mb-6"/>
                <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
                    Сохранить
                </Button>
                <div>
                    <span className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</span>
                    <Button htmlType="button" type="secondary" size="medium" onClick={() => {
                        navigate(LOGIN_PATH)
                    }} extraClass="m-1 p-1">
                        Войти
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword;