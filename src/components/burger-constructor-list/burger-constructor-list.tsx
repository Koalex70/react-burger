import React, {FC, useCallback} from "react";
import BurgerConstructorElement from "../burger-constructor-element/burger-constructor-element";
import styles from "./burger-constructor-list.module.css";

import {SET_BURGER_CONSTRUCTOR_INGREDIENTS} from "../../services/actions/burger-constructor";
import {useDispatch} from "../../services/hooks/use-dispatch";
import {TBurgerConstructorElementIngredient} from "../../services/types";


type TBurgerConstructorList = {
    ingredients: Array<TBurgerConstructorElementIngredient>
}

 const BurgerConstructorList:FC<TBurgerConstructorList> = ({ingredients}) => {

    const dispatch = useDispatch();

    const moveCard = useCallback((dragIndex:number, hoverIndex:number) => {
        const dragCard = ingredients[dragIndex];
        const newCards = [...ingredients];
        newCards.splice(dragIndex, 1);
        newCards.splice(hoverIndex, 0, dragCard);
        dispatch({
            type: SET_BURGER_CONSTRUCTOR_INGREDIENTS,
            ingredients: newCards,
        })
    }, [ingredients, dispatch]);

    return (
        <div className={styles.container}>
            {ingredients.map((ingredient, index) => {

                return <BurgerConstructorElement
                    key={ingredient.uuid}
                    ingredient={ingredient}
                    index={index}
                    moveCard={moveCard}
                />
            })}
        </div>
    )
}

export default BurgerConstructorList;