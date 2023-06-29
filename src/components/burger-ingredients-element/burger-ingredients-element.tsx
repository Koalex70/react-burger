import React, {FC} from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients-element.module.css";
import classNames from "classnames";
import BurgerIngredientsCounter from "../burger-ingredients-counter/burger-ingredients-counter";
import {useDrag} from "react-dnd";
import {Link, useLocation} from "react-router-dom";
import {TBurgerIngredientsElement} from "../../services/types";

const BurgerIngredientsElement:FC<TBurgerIngredientsElement> = ({id, image, name, type, price, count, image_mobile}) => {

    const location = useLocation();

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: {id, image, name, type, price, count, image_mobile}
    });

    return (
        <Link key={id} to={`/ingredients/${id}`} state={{background: location}} className={styles.link}>
            <div className={styles.element} ref={dragRef}>
                <img src={image} alt={name} className={styles.image}/>
                <BurgerIngredientsCounter count={count} type={type}/>
                <div className={styles.price}>
                    <span className={"text text_type_main-default"}>{price}</span>
                    <CurrencyIcon type="primary"/>
                </div>
                <h4 className={classNames(styles.name, "text text_type_main-default")}>{name}</h4>
            </div>
        </Link>
    )
}

export default BurgerIngredientsElement;