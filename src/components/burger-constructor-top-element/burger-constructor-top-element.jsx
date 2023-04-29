import React from "react";

import {
    ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor-top-element.module.css"

export default function BurgerConstructorTopElement(props) {

    return (
        <div>
            <ConstructorElement text={props.bun.name} thumbnail={props.bun.image_mobile} price={props.bun.price}
                                type={"top"} isLocked="true" extraClass={styles.element}/>
        </div>
    );
}