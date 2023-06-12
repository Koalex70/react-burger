import React from "react";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styles from './ingredient-details.module.css'
import classNames from "classnames";

export const IngredientDetailsPage = () => {
    return (
        <>
            <h3 className={classNames([styles.title, 'text text_type_main-large'])}>Детали ингредиента</h3>
            <IngredientDetails/>
        </>
    )
}