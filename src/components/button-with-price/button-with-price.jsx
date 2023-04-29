import React from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./button-with-price.module.css";

export default function buttonWithPrice (props) {
    return (
        <div className={styles.container}>
            <span className={styles.price}>{props.price}</span>
            <div className={styles.currency}>
                <CurrencyIcon type={"primary"}/>
            </div>
            <Button htmlType={"submit"} type={"primary"} size="medium" >Оформить заказ</Button>
        </div>
    )
}