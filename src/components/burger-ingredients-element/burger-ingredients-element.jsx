import React from "react";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients-element.module.css";
import classNames from "classnames";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {DATA_PROP_TYPES} from "../../constants/constants";

export default function BurgerIngredientsElement(props) {

    const [visible, setVisible] = React.useState(false);

    const handleOpenModal = () => {
        setVisible(true);
    }

    const handleCloseModal = () => {
        setVisible(false);
    }

    const modal = (
        <Modal title="Детали ингредиента" show={visible} onClose={handleCloseModal}>
            <IngredientDetails element={props.element}/>
        </Modal>
    );

    return (
        <>
            <div className={styles.element} onClick={handleOpenModal}>
                <img src={props.element.image} alt=""/>
                {props.element.__v > 0 ?
                    (<Counter count={props.element.__v} extraClass={styles.counter}/>) : null}
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