import React from "react";
import styles from './ingredient-details.module.css';
import {useSelector} from "react-redux";

export default function IngredientDetails() {

    const details = useSelector(state => state.ingredientDetails.details);

    return (
        <div className={styles.container}>
            <img src={details?.image_large} alt=""/>
            <h3 className="text text_type_main-medium mt-4 mb-8">{details?.name}</h3>
            <div className={styles.categories}>
                <div className="mr-5">
                    <p className="text text_type_main-default">Калории, ккал</p>
                    <p className="text text_type_main-default">{details?.calories}</p>
                </div>
                <div className="mr-5">
                    <p className="text text_type_main-default">Белки, г</p>
                    <p className="text text_type_main-default">{details?.proteins}</p>
                </div>
                <div className="mr-5">
                    <p className="text text_type_main-default">Жиры, г</p>
                    <p className="text text_type_main-default">{details?.fat}</p>
                </div>
                <div>
                    <p className="text text_type_main-default">Углеводы, г</p>
                    <p className="text text_type_main-default">{details?.carbohydrates}</p>
                </div>
            </div>
        </div>
    )
}

