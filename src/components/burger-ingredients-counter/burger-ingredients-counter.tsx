import React, {FC} from "react";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients-counter.module.css";
import {BUN, BUN_COUNT} from "../../constants/constants";
import {TBurgerIngredientsCounter} from "../../services/types";

const BurgerIngredientsCounter: FC<TBurgerIngredientsCounter> = ({count, type}) => {

    if (count < 1) return (<></>);

    return (
        <Counter count={type === BUN ? BUN_COUNT : count} extraClass={styles.counter}/>
    );
}

export default BurgerIngredientsCounter;