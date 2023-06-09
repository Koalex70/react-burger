import React, {useEffect, useState} from "react";
import {EmailInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';
import {FORGOT_PATH, REGISTER_PATH} from "../../constants/constants";
import {useNavigate} from "react-router-dom";
import PasswordInput from "../password-input/password-input";
import {useDispatch, useSelector} from "react-redux";
import {postLogin, SET_LOGIN_INITIAL_STATE} from "../../services/actions/login";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loginSuccess} = useSelector(state => state.login);

    const submit = () => {
        let userData = {
            'email': email,
            'password': password
        }

        dispatch(postLogin(userData));
    }

    useEffect(() => {
        if (loginSuccess) {
            dispatch({
                type: SET_LOGIN_INITIAL_STATE,
            });
            navigate(-1, {replace: true});
        }
    }, [loginSuccess, navigate, dispatch]);


    return (
        <div className={styles.form}>
            <h3 className="text text_type_main-medium mb-6">Вход</h3>
            <EmailInput value={email} onChange={e => setEmail(e.target.value)} extraClass="mb-6"/>
            <PasswordInput value={password} onChange={e => setPassword(e.target.value)} placeholder={'Пароль'}/>
            <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20" onClick={submit}>
                Войти
            </Button>
            <div>
                <span className='text text_type_main-default text_color_inactive'>Вы — новый пользователь?</span>
                <Button htmlType="button" type="secondary" size="medium" onClick={() => {
                    navigate(REGISTER_PATH)
                }} extraClass="m-1 p-1">
                    Зарегистрироваться
                </Button>
            </div>
            <div>
                <span className='text text_type_main-default text_color_inactive'>Забыли пароль?</span>
                <Button htmlType="button" type="secondary" size="medium" onClick={() => {
                    navigate(FORGOT_PATH)
                }} extraClass="m-1 p-1">
                    Восстановить пароль
                </Button>
            </div>
        </div>
    )
}

export default Login;