import React from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients-element.module.css";
import classNames from "classnames";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {DATA_PROP_TYPES} from "../../constants/constants";
import BurgerIngredientsCounter from "../burger-ingredients-counter/burger-ingredients-counter";
import {useDispatch} from "react-redux";
import {
    DELETE_BURGER_INGREDIENT_DETAILS,
    SET_BURGER_INGREDIENT_DETAILS
} from "../../services/actions/ingredient-details";
import {useDrag} from "react-dnd";
import {useModal} from "../../hooks/use-modal";

export default function BurgerIngredientsElement(props) {

    const dispatch = useDispatch();
    const {isModalOpen, openModal, closeModal} = useModal();

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: props.element
    });

    const handleOpenModal = () => {
        dispatch({
            type: SET_BURGER_INGREDIENT_DETAILS,
            details: props.element
        });

        openModal();
    }

    const handleCloseModal = () => {
        dispatch({
            type: DELETE_BURGER_INGREDIENT_DETAILS,
        });

        closeModal();
    }

    const modal = (
        <Modal title="Детали ингредиента" show={isModalOpen} onClose={handleCloseModal}>
            <IngredientDetails/>
        </Modal>
    );

    return (
        <>
            <div className={styles.element} onClick={handleOpenModal} ref={dragRef}>
                <img src={props.element.image} alt={props.element.name}/>
                <BurgerIngredientsCounter count={props.element.count} type={props.element.type}/>
                <div className={styles.price}>
                    <span className={"text text_type_main-default"}>{props.element.price}</span>
                    <CurrencyIcon type="primary"/>
                </div>
                <h4 className={classNames(styles.name, "text text_type_main-default")}>{props.element.name}</h4>
            </div>
            {isModalOpen && modal}
        </>
    )
}

BurgerIngredientsElement.propTypes = {
    element: DATA_PROP_TYPES.isRequired
}