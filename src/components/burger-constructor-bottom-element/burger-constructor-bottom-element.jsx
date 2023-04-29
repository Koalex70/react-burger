import React from "react";

import {
    ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-bottom-element.module.css";

export default function BurgerConstructorBottomElement(props) {

    return (
        <div>
            <ConstructorElement text={props.bun.name} thumbnail={props.bun.image_mobile} price={props.bun.price}
                                type={"bottom"} isLocked="true" extraClass={styles.element}/>
        </div>
    );
}