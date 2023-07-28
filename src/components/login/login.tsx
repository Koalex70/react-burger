import React, {FC, useEffect, useState} from "react";
import {EmailInput, Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';
import {FORGOT_PATH, REGISTER_PATH} from "../../constants/constants";
import {useLocation, useNavigate} from "react-router-dom";
import {getLoginState, postLogin, SET_LOGIN_INITIAL_STATE} from "../../services/actions/login";
import {useDispatch} from "../../services/hooks/use-dispatch";
import {useSelector} from "../../services/hooks/use-selector";

const Login: FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loginSuccess} = useSelector(getLoginState);

    const from = location.state?.from || "/";

    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const userData = {
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
            navigate(from, {replace: true});
        }
    }, [loginSuccess, navigate, dispatch, from]);


    return (
        <div className={styles.form}>
            <h3 className="text text_type_main-medium mb-6">Вход</h3>
            <form onSubmit={submit}>
                <EmailInput value={email} onChange={e => setEmail(e.target.value)} extraClass="mb-6 cy-login-email-input"/>
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={'Пароль'}
                    type={isVisible ? 'text' : 'password'}
                    icon={isVisible ? 'HideIcon' : 'ShowIcon'}
                    onIconClick={() => setIsVisible(!isVisible)}
                    extraClass="mb-6 cy-login-password-input"
                />
                <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
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
            </form>
        </div>
    )
}

export default Login;