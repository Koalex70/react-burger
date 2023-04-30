import React from "react";

import {
    ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor-top-element.module.css"
import {DATA_PROP_TYPES} from "../../constants/constants";
import PropTypes from "prop-types";

export default function BurgerConstructorTopElement(props) {

    return (
        <div>
            <ConstructorElement text={props.name} thumbnail={props.image_mobile} price={props.price}
                                type={"top"} isLocked="true" extraClass={styles.element}/>
        </div>
    );
}

BurgerConstructorTopElement.propTypes = {
    name: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}