import React from "react";
import BurgerConstructorTopElement from "../burger-constructor-top-element/burger-constructor-top-element";
import BurgerConstructorBottomElement from "../burger-constructor-bottom-element/burger-constructor-bottom-element";
import ButtonWithPrice from "../button-with-price/button-with-price";
import styles from "./burger-constructor.module.css";
import BurgerConstructorList from "../burger-constructor-list/burger-constructor-list";
import PropTypes from "prop-types";
import {BUN, DATA_PROP_TYPES} from "../../constants/constants";

export default function BurgerConstructor(props) {

    const bun = React.useMemo(() => props.data.filter((ingredient) => ingredient.type === BUN && ingredient.__v > 0)[0], [props.data]);
    const ingredients = React.useMemo(() => props.data.filter((ingredient) => ingredient.__v > 0), [props.data]);
    const price = React.useMemo(() => props.data.reduce((acc,curr) => acc + curr.price, 0), [props.data]);

    return (
        <div className={styles.container}>
            <BurgerConstructorTopElement name={bun.name} image_mobile={bun.image_mobile} price={bun.price} />
            <BurgerConstructorList ingredients={ingredients}/>
            <div className={styles.bottom}>
                <BurgerConstructorBottomElement name={bun.name} image_mobile={bun.image_mobile} price={bun.price}/>
                <ButtonWithPrice price={price}/>
            </div>
        </div>
    );
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(DATA_PROP_TYPES).isRequired
}