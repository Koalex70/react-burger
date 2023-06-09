import React, {useEffect, useState} from "react";
import styles from './profile.module.css'
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {getUserData, updateUserData} from "../../services/actions/user-data";

const Profile = () => {
    const dispatch = useDispatch();
    const {userDataRequest, userDataFailed, userDataSuccess, userData} = useSelector(state => state.userData);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('******');
    const [disabled, setDisabled] = useState(true);

    const setInitialState = () => {
        setName(userData.name);
        setEmail(userData.email);
        setPassword('******');

        setDisabled(true);
    }

    const onIconCLick = () => {
        setDisabled(!disabled);

        if (disabled) {
            setPassword('');
        }

        if (!disabled) {
            setInitialState();
        }
    }

    useEffect(() => {
        dispatch(getUserData());

        if (userDataSuccess) {
            setName(userData.name);
            setEmail(userData.email);
        }

    }, [dispatch, userDataSuccess]);

    const submit = (e) => {
        e.preventDefault();
        if (!name || !password || !email) return;

        const user = {
            email: email,
            name: name,
            password: password
        };
        dispatch(updateUserData(user));
    }

    if (userDataRequest) {
        return (<h3>Загрузка...</h3>);
    } else if (userDataFailed) {
        return (<h3>Произошла ошибка при загрузке страницы.</h3>);
    }

    return (
        <div className={styles.wrapper}>
            <Input
                placeholder={'Имя'}
                type='text'
                value={name}
                icon={'EditIcon'}
                onChange={e => setName(e.target.value)}
                onIconClick={onIconCLick}
                extraClass={'mb-6'}
                disabled={disabled}

            />
            <EmailInput
                placeholder={'Логин'}
                type='email'
                icon={'EditIcon'}
                value={email}
                onChange={e => setEmail(e.target.value)}
                onIconClick={onIconCLick}

                extraClass={'mb-6'}
                disabled={disabled}
            />
            <PasswordInput
                placeholder={'Пароль'}
                type='password'
                icon={'EditIcon'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                onIconClick={onIconCLick}

                extraClass={'mb-6'}
                disabled={disabled}
            />
            <div className={styles.buttons}>
                <Button htmlType={'submit'} disabled={disabled} onClick={submit}>Сохранить</Button>
                <Button htmlType={'reset'} disabled={disabled} onClick={setInitialState}>Отменить</Button>
            </div>

        </div>
    )
}

export default Profile;