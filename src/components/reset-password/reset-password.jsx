import React, {useEffect, useState} from "react";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './reset-password.module.css';
import {LOGIN_PATH} from "../../constants/constants";
import {useNavigate} from "react-router-dom";
import PasswordInput from "../password-input/password-input";
import {useDispatch, useSelector} from "react-redux";
import {postResetPassword, SET_RESET_PASSWORD_INITIAL_STATE} from "../../services/actions/reset-password";

const ResetPassword = () => {

    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {resetPasswordSuccess} = useSelector(state => state.resetPassword);

    const submit = () => {
        if (!code || !password) return;

        dispatch(postResetPassword({
            'token': code,
            'password': password
        }));
    }

    useEffect(() => {
        dispatch({
            type: SET_RESET_PASSWORD_INITIAL_STATE
        });
        if (resetPasswordSuccess) {
            navigate('/');
        }
    }, [dispatch, resetPasswordSuccess, navigate]);

    return (
        <div className={styles.form}>
            <h3 className="text text_type_main-medium mb-6">Восстановление пароля</h3>
            <PasswordInput value={password} onChange={e => setPassword(e.target.value)}
                           placeholder={'Введите новый пароль'}/>
            <Input value={code} placeholder='Введите код из письма' onChange={e => setCode(e.target.value)}
                   extraClass="mb-6"/>
            <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20" onClick={submit}>
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
        </div>
    )
}

export default ResetPassword;