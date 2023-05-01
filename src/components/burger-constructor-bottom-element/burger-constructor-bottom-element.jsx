import React from "react";

import {
    ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-bottom-element.module.css";
import PropTypes from "prop-types";

export default function BurgerConstructorBottomElement(props) {

    return (
        <div>
            <ConstructorElement text={props.name} thumbnail={props.image_mobile} price={props.price}
                                type={"bottom"} isLocked="true" extraClass={styles.element}/>
        </div>
    );
}

BurgerConstructorBottomElement.propTypes = {
    name: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}