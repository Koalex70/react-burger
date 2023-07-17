import React, {FC, useEffect, useState} from "react";
import styles from './profile.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {getUserData, getUserDataState, updateUserData} from "../../services/actions/user-data";
import {useDispatch} from "../../services/hooks/use-dispatch";
import {useSelector} from "../../services/hooks/use-selector";

const Profile: FC = () => {
    const dispatch = useDispatch();
    const {userDataRequest, userDataFailed, userDataSuccess, userData} = useSelector(getUserDataState);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('******');

    const [disabledElements, setDisabledElements] = useState({
        name: true,
        email: true,
        password: true,
    });

    const setInitialState = () => {
        if (!userData) return;

        setName(userData.name);
        setEmail(userData.email);
        setPassword('******');
        setDisabledElements({
            name: true,
            email: true,
            password: true
        });
    }

    const onNameIconClick = () => {
        setDisabledElements({...disabledElements, name: !disabledElements.name})

        if (!disabledElements.name) {
            if (!userData) return;

            setName(userData.name);
        }
    }

    const onEmailIconClick = () => {
        setDisabledElements({...disabledElements, email: !disabledElements.email})

        if (!disabledElements.email) {
            if (!userData) return;

            setEmail(userData.email);
        }
    }

    const onPasswordIconClick = () => {
        setDisabledElements({...disabledElements, password: !disabledElements.password})

        if (disabledElements.password) {
            setPassword('');
        }

        if (!disabledElements.password) {
            setPassword('******');
        }
    }

    useEffect(() => {
        dispatch(getUserData());

        if (userDataSuccess) {

            if (!userData) return;

            setName(userData.name);
            setEmail(userData.email);
        }

    }, [dispatch, userDataSuccess]);

    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let user: {
            name?: string;
            email?: string;
            password?: string;
        } = {};

        if (!disabledElements.name && name !== userData?.name) {
            user.name = name;
        }

        if (!disabledElements.email && email !== userData?.email) {
            user.email = email;
        }

        if (!disabledElements.password && !!password) {
            user.password = password;
        }
        dispatch(updateUserData(user));
    }

    if (userDataRequest) {
        return (<h3>Загрузка...</h3>);
    } else if (userDataFailed) {
        return (<h3>Произошла ошибка при загрузке страницы.</h3>);
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={submit}>
                <Input
                    placeholder={'Имя'}
                    type='text'
                    value={name}
                    icon={'EditIcon'}
                    onChange={e => setName(e.target.value)}
                    onIconClick={onNameIconClick}
                    extraClass={'mb-6'}
                    disabled={disabledElements.name}
                />
                <Input
                    placeholder={'Логин'}
                    type={'email'}
                    icon={'EditIcon'}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onIconClick={onEmailIconClick}
                    extraClass={'mb-6'}
                    disabled={disabledElements.email}
                />
                <Input
                    placeholder={'Пароль'}
                    type={'password'}
                    icon={'EditIcon'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onIconClick={onPasswordIconClick}
                    extraClass={'mb-6'}
                    disabled={disabledElements.password}
                />
                <div className={styles.buttons}>
                    <Button htmlType={'submit'}
                            disabled={disabledElements.name && disabledElements.email && disabledElements.password}>Сохранить</Button>
                    <Button htmlType={'reset'}
                            disabled={disabledElements.name && disabledElements.email && disabledElements.password}
                            onClick={setInitialState}>Отменить</Button>
                </div>
            </form>
        </div>
    )
}

export default Profile;