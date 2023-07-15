import React from "react";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styles from './ingredient-details.module.css'

export const IngredientDetailsPage = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <IngredientDetails/>
            </div>
        </>
    )
}