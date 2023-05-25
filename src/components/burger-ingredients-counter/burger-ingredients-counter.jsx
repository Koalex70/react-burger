import React from "react";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients-counter.module.css";
import {BUN, BUN_COUNT, MAIN, SAUCE} from "../../constants/constants";
import PropTypes from "prop-types";

export default function BurgerIngredientsCounter({count, type}) {

    if (count < 1 ) return ;

    return (
        <Counter count={type === BUN ? BUN_COUNT : count} extraClass={styles.counter}/>
    );
}

BurgerIngredientsCounter.propTypes = {
    count: PropTypes.number.isRequired,
    type: PropTypes.oneOf([BUN, SAUCE, MAIN]).isRequired,
}