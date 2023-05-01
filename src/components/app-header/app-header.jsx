import React from "react";
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

export default function AppHeader() {
    return (
        <header>
            <nav>
                <div className={styles.leftSIde}>
                    <div className={styles.constructor}>
                        <a href="#constructor" className={styles.link}>
                            <BurgerIcon type="primary"/>
                            <span className="text text_type_main-default">Конструктор</span>
                        </a>
                    </div>
                    <div className={styles.orderList}>
                        <a href="#orderList" className={styles.link}>
                            <ListIcon type="secondary"/>
                            <span className="text text_type_main-default">Лента заказов</span>
                        </a>
                    </div>
                </div>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <div className={styles.personalAccount}>
                    <a href="#orderList" className={styles.link}>
                        <ProfileIcon type="secondary"/>
                        <span className="text text_type_main-default">Личный кабинет</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}