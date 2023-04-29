import React from "react";
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

export default function AppHeader() {
    return (
        <header>
            <nav>
                <div className={styles.leftSIde}>
                    <div className={styles.constructor}>
                        <BurgerIcon type="primary"/>
                        <span className="text text_type_main-default">Конструктор</span>
                    </div>
                    <div className={styles.orderList}>
                        <ListIcon type="secondary"/>
                        <span className="text text_type_main-default">Лента заказов</span>
                    </div>
                </div>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <div className={styles.personalAccount}>
                    <ProfileIcon type="secondary"/>
                    <span className="text text_type_main-default">Личный кабинет</span>
                </div>
            </nav>
        </header>
    )
}