import React, {FC} from "react";
import styles from './ingredient-details.module.css';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getBurgerIngredientsState} from "../../services/actions/burger-ingredients";

const IngredientDetails: FC = () => {

    const {id} = useParams();
    const {burgerIngredients} = useSelector(getBurgerIngredientsState);
    if (!id) {
        return (<></>);
    }

    const details = burgerIngredients.find((ingredient: { id: string; }) => ingredient.id === id);

    if (!details) {
        return (<></>);
    }

    return (
        <div className={styles.container}>
            <img src={details.image_large} alt={details.name}/>
            <h3 className="text text_type_main-medium mt-4 mb-8">{details.name}</h3>
            <div className={styles.categories}>
                <div className="mr-5">
                    <p className="text text_type_main-default">Калории, ккал</p>
                    <p className="text text_type_main-default">{details.calories}</p>
                </div>
                <div className="mr-5">
                    <p className="text text_type_main-default">Белки, г</p>
                    <p className="text text_type_main-default">{details.proteins}</p>
                </div>
                <div className="mr-5">
                    <p className="text text_type_main-default">Жиры, г</p>
                    <p className="text text_type_main-default">{details.fat}</p>
                </div>
                <div>
                    <p className="text text_type_main-default">Углеводы, г</p>
                    <p className="text text_type_main-default">{details.carbohydrates}</p>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails;

