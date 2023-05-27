import React, {forwardRef} from "react";
import BurgerIngredientsElement from "../burger-ingredients-element/burger-ingredients-element";
import styles from "./burger-ingredients-list.module.css";
import classNames from "classnames";
import PropTypes from 'prop-types';
import {BUN, MAIN, SAUCE} from "../../constants/constants";
import {useSelector} from "react-redux";

const BurgerIngredientsList = forwardRef(({title, filter}, ref) => {

    const ingredients = useSelector(state => state.burgerIngredients.burgerIngredients?.filter(ingredient => ingredient.type === filter));

    return (
        <div className={styles.container} ref={ref}>
            <h3 className={classNames(styles.title, "text text_type_main-medium")}>
                {title}
            </h3>
            <div className={styles.burgerList}>
                {ingredients?.map(el => {
                        return <BurgerIngredientsElement key={el._id} element={el}/>;
                    }
                )}
            </div>
        </div>
    );
})


BurgerIngredientsList.propTypes = {
    title: PropTypes.string.isRequired,
    filter: PropTypes.oneOf([BUN, SAUCE, MAIN]).isRequired,
}

export default BurgerIngredientsList;
