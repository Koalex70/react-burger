import React from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients-element.module.css";
import classNames from "classnames";
import {DATA_PROP_TYPES} from "../../constants/constants";
import BurgerIngredientsCounter from "../burger-ingredients-counter/burger-ingredients-counter";
import {useDrag} from "react-dnd";
import {Link, useLocation} from "react-router-dom";

export default function BurgerIngredientsElement(props) {

    const location = useLocation();
    const ingredientId = props.element._id;

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: props.element
    });

    return (
        <Link key={ingredientId} to={`/ingredients/${ingredientId}`} state={{background: location}} className={styles.link}>
            <div className={styles.element} ref={dragRef}>
                <img src={props.element.image} alt={props.element.name} className={styles.image}/>
                <BurgerIngredientsCounter count={props.element.count} type={props.element.type}/>
                <div className={styles.price}>
                    <span className={"text text_type_main-default"}>{props.element.price}</span>
                    <CurrencyIcon type="primary"/>
                </div>
                <h4 className={classNames(styles.name, "text text_type_main-default")}>{props.element.name}</h4>
            </div>
        </Link>
    )
}

BurgerIngredientsElement.propTypes = {
    element: DATA_PROP_TYPES.isRequired
}