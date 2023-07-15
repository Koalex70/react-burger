import React, {FC, useEffect, useState} from "react";
import {EmailInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './forgot-password.module.css';
import {LOGIN_PATH, RESET_PASSWORD_PATH} from "../../constants/constants";
import {useNavigate} from "react-router-dom";
import {getForgotPasswordState, postForgotPassword} from "../../services/actions/forgot-password";
import {useDispatch} from "../../services/hooks/use-dispatch";
import {useSelector} from "../../services/hooks/use-selector";

const ForgotPassword: FC = () => {

    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const {forgotPasswordSuccess} = useSelector(getForgotPasswordState);
    const navigate = useNavigate();

    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!email) return;
        dispatch(postForgotPassword(email));
    }

    useEffect(() => {
        if (forgotPasswordSuccess) {
            navigate(RESET_PASSWORD_PATH);
        }
    }, [forgotPasswordSuccess, dispatch, navigate]);

    return (
        <div className={styles.form}>
            <h3 className="text text_type_main-medium mb-6">Восстановление пароля</h3>
            <form onSubmit={submit}>
                <EmailInput value={email} onChange={e => setEmail(e.target.value)} extraClass="mb-6"/>
                <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
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
            </form>
        </div>
    )
}

export default ForgotPassword;