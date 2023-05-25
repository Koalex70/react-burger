import React, {useState} from "react";
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

export default function BurgerIngredientsElement(props) {

    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const [, dragRef] = useDrag({
       type: "ingredient",
       item: props.element
    });

    const handleOpenModal = () => {
        dispatch({
            type: SET_BURGER_INGREDIENT_DETAILS,
            details: props.element
        });

        setVisible(true);
    }

    const handleCloseModal = () => {
        dispatch({
            type: DELETE_BURGER_INGREDIENT_DETAILS,
        });

        setVisible(false);
    }

    const modal = (
        <Modal title="Детали ингредиента" show={visible} onClose={handleCloseModal}>
            <IngredientDetails/>
        </Modal>
    );

    return (
        <>
            <div className={styles.element} onClick={handleOpenModal} ref={dragRef}>
                <img src={props.element.image} alt=""/>
                <BurgerIngredientsCounter count={props.element.count} type={props.element.type}/>
                <div className={styles.price}>
                    <span className={"text text_type_main-default"}>{props.element.price}</span>
                    <CurrencyIcon type="primary"/>
                </div>
                <h4 className={classNames(styles.name, "text text_type_main-default")}>{props.element.name}</h4>
            </div>
            {visible && modal}
        </>
    )
}

BurgerIngredientsElement.propTypes = {
    element: DATA_PROP_TYPES.isRequired
}