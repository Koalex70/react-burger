import React from "react";
import BurgerIngredientsElement from "../burger-ingredients-element/burger-ingredients-element";
import styles from "./burger-ingredients-list.module.css";
import classNames from "classnames";

export default function BurgerIngredientsList(props) {

    return (
        <div className={styles.container}>
            <h3 className={classNames(styles.title, "text text_type_main-medium")}>
                {props.title}
            </h3>
            <div className={styles.burgerList}>
                {props.list.map(el => {
                        return <BurgerIngredientsElement key={el._id} element={el}/>;
                    }
                )}
            </div>
        </div>
    );
}