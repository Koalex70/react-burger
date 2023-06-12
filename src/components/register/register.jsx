import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./register.module.css";
import {Button, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {LOGIN_PATH} from "../../constants/constants";
import PasswordInput from "../password-input/password-input";
import {useDispatch, useSelector} from "react-redux";
import {getRegisterState, postRegister, SET_REGISTER_INITIAL_STATE} from "../../services/actions/register";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {registerSuccess} = useSelector(getRegisterState);

    const submit = (e) => {
        e.preventDefault();

        if (!name || !email || !password) return;

        let userData = {
            name: name,
            email: email,
            password: password,
        };

        dispatch(postRegister(userData));
    }

    useEffect(() => {
        if (registerSuccess) {
            dispatch({
                type: SET_REGISTER_INITIAL_STATE
            })
            navigate("/");
        }
    }, [registerSuccess, navigate, dispatch])

    return (
        <div className={styles.form}>
            <h3 className="text text_type_main-medium mb-6">Регистрация</h3>
            <form onSubmit={submit}>
                <Input
                    placeholder={'Имя'}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    extraClass="mb-6"
                />
                <EmailInput value={email} onChange={e => setEmail(e.target.value)} extraClass="mb-6"/>
                <PasswordInput value={password} onChange={e => setPassword(e.target.value)} placeholder={'Пароль'}/>
                <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
                    Зарегистрироваться
                </Button>
                <div>
                    <span className='text text_type_main-default text_color_inactive'>Уже зарегистрированы?</span>
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

export default Register;

