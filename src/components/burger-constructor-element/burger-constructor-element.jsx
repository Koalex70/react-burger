import React from "react";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../burger-constructor-element/burger-constructor-element.module.css";

import PropTypes from 'prop-types';

export default function BurgerConstructorElement(props) {
    return (
        <div className={styles.container}>
            <DragIcon type={"primary"}/>
            <ConstructorElement text={props.name} thumbnail={props.imageMobile} price={props.price}
            extraClass={styles.element}/>
        </div>
    )
}

BurgerConstructorElement.propTypes = {
    name: PropTypes.string.isRequired,
    imageMobile: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}