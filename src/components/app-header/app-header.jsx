import React, {useState} from "react";
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import {Link} from "react-router-dom";
import {BURGER_CONSTRUCTOR_PATH, PROFILE_PATH} from "../../constants/constants";

export default function AppHeader() {

    const [active, setActive] = useState('constructor');

    return (
        <header>
            <nav>
                <div className={styles.leftSIde}>
                    <div className={styles.constructor}>
                        <Link to={BURGER_CONSTRUCTOR_PATH} className={styles.link} onClick={() => {
                            setActive('constructor')
                        }}>
                            <BurgerIcon type={active === 'constructor' ? 'primary' : "secondary"}/>
                            <span
                                className={active === 'constructor' ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'}>Конструктор</span>
                        </Link>
                    </div>
                    <div className={styles.orderList}>
                        <Link to={BURGER_CONSTRUCTOR_PATH} className={styles.link} onClick={() => {
                            setActive('orderList')
                        }}>
                            <ListIcon type={active === 'orderList' ? 'primary' : "secondary"}/>
                            <span
                                className={active === 'orderList' ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'}>Лента заказов</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <div className={styles.personalAccount}>
                    <Link to={PROFILE_PATH} className={styles.link} onClick={() => {
                        setActive('profile')
                    }}>
                        <ProfileIcon type={active === 'profile' ? 'primary' : "secondary"}/>
                        <span
                            className={active === 'profile' ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'}>Личный кабинет</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}