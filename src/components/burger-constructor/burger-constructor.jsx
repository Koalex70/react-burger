import React, {useMemo} from "react";
import BurgerConstructorTopElement from "../burger-constructor-top-element/burger-constructor-top-element";
import BurgerConstructorBottomElement from "../burger-constructor-bottom-element/burger-constructor-bottom-element";
import ButtonWithPrice from "../button-with-price/button-with-price";
import styles from "./burger-constructor.module.css";
import BurgerConstructorList from "../burger-constructor-list/burger-constructor-list";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {
    UPDATE_BURGER_CONSTRUCTOR_BUN,
    ADD_BURGER_CONSTRUCTOR_INGREDIENTS,
    getBurgerConstructorState
} from "../../services/actions/burger-constructor";
import {BUN, BUN_COUNT} from "../../constants/constants";
import {ADD_BURGER_INGREDIENT_COUNT, REMOVE_BURGER_INGREDIENT_COUNT} from "../../services/actions/burger-ingredients";
import {v4 as uuidv4} from 'uuid';

export default function BurgerConstructor() {

    const {bun, ingredients} = useSelector(getBurgerConstructorState);

    const dispatch = useDispatch();

    const price = useMemo(() => {
        let price = ingredients ? ingredients.reduce((acc, curr) => acc + curr.price, 0) : 0;
        price += bun ? bun.price * BUN_COUNT : 0;

        return price;
    }, [ingredients, bun]);

    const [, dropTargetIngredient] = useDrop({
        accept: "ingredient",
        drop(item) {
            if (item.type === BUN) {
                if (bun) {
                    dispatch({
                        type: REMOVE_BURGER_INGREDIENT_COUNT,
                        id: bun._id
                    });
                }
                dispatch({
                    type: UPDATE_BURGER_CONSTRUCTOR_BUN,
                    bun: {...item}
                });
            } else {
                dispatch({
                    type: ADD_BURGER_CONSTRUCTOR_INGREDIENTS,
                    ingredients: {...item, uuid: uuidv4()}
                });
            }

            dispatch({
                type: ADD_BURGER_INGREDIENT_COUNT,
                id: item._id,
            });
        }
    });

    return (
        <div className={styles.container} ref={dropTargetIngredient}>

            {
                bun && <BurgerConstructorTopElement
                    name={bun.name}
                    image_mobile={bun.image_mobile}
                    price={bun.price}/>
            }

            {ingredients && <BurgerConstructorList ingredients={ingredients}/>}
            <div className={styles.bottom}>
                {
                    bun && <BurgerConstructorBottomElement
                        name={bun.name}
                        image_mobile={bun.image_mobile}
                        price={bun.price}/>
                }
                <ButtonWithPrice price={price}/>
            </div>
        </div>
    );
}
