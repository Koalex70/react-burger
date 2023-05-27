import React, {useCallback} from "react";
import BurgerConstructorElement from "../burger-constructor-element/burger-constructor-element";
import styles from "./burger-constructor-list.module.css";
import PropTypes from 'prop-types';
import {DATA_PROP_TYPES} from "../../constants/constants";
import {useDispatch} from "react-redux";
import {SET_BURGER_CONSTRUCTOR_INGREDIENTS} from "../../services/actions/burger-constructor";

export default function BurgerConstructorList(props) {

    const dispatch = useDispatch();

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = props.ingredients[dragIndex];
        const newCards = [...props.ingredients]
        newCards.splice(dragIndex, 1)
        newCards.splice(hoverIndex, 0, dragCard)
        dispatch({
            type: SET_BURGER_CONSTRUCTOR_INGREDIENTS,
            ingredients: newCards,
        })
    }, [props.ingredients, dispatch]);

    return (
        <div className={styles.container}>
            {props.ingredients.map((ingredient, index) => {

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

BurgerConstructorList.propTypes = {
    ingredients: PropTypes.arrayOf(DATA_PROP_TYPES).isRequired,
}