import React from "react";
import styles from './ingredient-details.module.css';
import PropTypes from "prop-types";

export default function IngredientDetails(props) {
    return (
        <div className={styles.container}>
            <img src={props.element.image_large} alt=""/>
            <h3 className="text text_type_main-medium mt-4 mb-8">{props.element.name}</h3>
            <div className={styles.categories}>
                <div className="mr-5">
                    <p className="text text_type_main-default">Калории, ккал</p>
                    <p className="text text_type_main-default">{props.element.calories}</p>
                </div>
                <div className="mr-5">
                    <p className="text text_type_main-default">Белки, г</p>
                    <p className="text text_type_main-default">{props.element.proteins}</p>
                </div>
                <div className="mr-5">
                    <p className="text text_type_main-default">Жиры, г</p>
                    <p className="text text_type_main-default">{props.element.fat}</p>
                </div>
                <div>
                    <p className="text text_type_main-default">Углеводы, г</p>
                    <p className="text text_type_main-default">{props.element.carbohydrates}</p>
                </div>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    element: PropTypes.shape({
        image_large: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
    })
}

