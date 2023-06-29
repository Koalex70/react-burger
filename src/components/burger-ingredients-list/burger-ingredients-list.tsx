import React, {forwardRef} from "react";
import BurgerIngredientsElement from "../burger-ingredients-element/burger-ingredients-element";
import styles from "./burger-ingredients-list.module.css";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {getBurgerIngredientsState} from "../../services/actions/burger-ingredients";
import {TBurgerIngredientsList} from "../../services/types";

type IBurgerIngredientsList = {
    title: string;
    filter: string;
}

const BurgerIngredientsList = forwardRef<HTMLDivElement, IBurgerIngredientsList>(({title, filter}, ref) => {

    const {burgerIngredients} = useSelector(getBurgerIngredientsState);
    const ingredients: Array<TBurgerIngredientsList> = burgerIngredients?.filter((ingredient: {
        type: string;
    }) => ingredient.type === filter);

    return (
        <div className={styles.container} ref={ref}>
            <h3 className={classNames(styles.title, "text text_type_main-medium")}>
                {title}
            </h3>
            <div className={styles.burgerList}>
                {ingredients?.map((el) => {
                        return <BurgerIngredientsElement
                            key={el.id}
                            id={el.id}
                            name={el.name}
                            type={el.type}
                            price={el.price}
                            image={el.image}
                            count={el.count}
                            image_mobile={el.image_mobile}
                        />;
                    }
                )}
            </div>
        </div>
    );
})

export default BurgerIngredientsList;
