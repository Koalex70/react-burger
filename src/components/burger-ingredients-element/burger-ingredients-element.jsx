import React from "react";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients-element.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function BurgerIngredientsElement(props) {

    return (
        <div className={styles.element}>
            <img src={props.element.image} alt=""/>
            {props.element.__v > 0 ?
                (<Counter count={props.element.__v} extraClass={styles.counter}/>) : null}
            <div className={styles.price}>
                <span className={"text text_type_main-default"}>{props.element.price}</span>
                <CurrencyIcon type="primary"/>
            </div>
            <h4 className={classNames(styles.name, "text text_type_main-default")}>{props.element.name}</h4>
        </div>
    )
}

BurgerIngredientsElement.propTypes = {
    element: PropTypes.shape({
        image: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })
}