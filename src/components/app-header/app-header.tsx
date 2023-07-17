import React, {FC, useState} from "react";
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import {Link} from "react-router-dom";
import {BURGER_CONSTRUCTOR_PATH, FEED_PATH, PROFILE_PATH} from "../../constants/constants";

const AppHeader: FC = () => {

    const [active, setActive] = useState<string>('constructor');

    return (
        <header>
            <nav>
                <div className={styles.leftSIde}>
                    <div className={styles.burgerConstructor}>
                        <Link to={BURGER_CONSTRUCTOR_PATH} className={styles.link} onClick={() => {
                            setActive('constructor')
                        }}>
                            <BurgerIcon type={active === 'constructor' ? 'primary' : "secondary"}/>
                            <span
                                className={active === 'constructor' ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'}>Конструктор</span>
                        </Link>
                    </div>
                    <div className={styles.orderList}>
                        <Link to={FEED_PATH} className={styles.link} onClick={() => {
                            setActive('orderList')
                        }}>
                            <ListIcon type={active === 'orderList' ? 'primary' : "secondary"}/>
                            <span
                                className={active === 'orderList' ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'}>Лента заказов</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.logo}>
                    <Link to={BURGER_CONSTRUCTOR_PATH} className={styles.link} onClick={() => {
                        setActive('constructor')
                    }}>
                        <Logo/>
                    </Link>
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

export default AppHeader;