import React from "react";
import BurgerConstructorElement from "../burger-constructor-element/burger-constructor-element";
import styles from "./burger-constructor-list.module.css";
import PropTypes from 'prop-types';
import {DATA_PROP_TYPES} from "../../constants/constants";

export default function BurgerConstructorList(props) {
    return (
        <div className={styles.container}>
            {props.ingredients.map(ingredient => {

                return <BurgerConstructorElement
                    key={ingredient._id}
                    name={ingredient.name}
                    imageMobile={ingredient.image_mobile}
                    price={ingredient.price}
                    extraClass={undefined}
                />
            })}
        </div>
    )
}

BurgerConstructorList.propTypes = {
    ingredients: PropTypes.arrayOf(DATA_PROP_TYPES).isRequired,
}