import React, {useContext, useEffect, useReducer} from "react";
import BurgerConstructorTopElement from "../burger-constructor-top-element/burger-constructor-top-element";
import BurgerConstructorBottomElement from "../burger-constructor-bottom-element/burger-constructor-bottom-element";
import ButtonWithPrice from "../button-with-price/button-with-price";
import styles from "./burger-constructor.module.css";
import BurgerConstructorList from "../burger-constructor-list/burger-constructor-list";
import {BurgerConstructorContext} from "../../services/contexts/appContext";

export default function BurgerConstructor() {

    const [burgerData] = useContext(BurgerConstructorContext);

    const [priceState, priceDispatch] = useReducer(() => {
        let price = burgerData.ingredients.reduce((acc, curr) => acc + curr.price, 0);

        price += burgerData.topBun.price;
        price += burgerData.bottomBun.price;

        return {price: price};
    }, {price: 0});

    useEffect(() => {
        priceDispatch();
    }, [burgerData.ingredients]);

    return (
        <div className={styles.container}>

            {
                burgerData.topBun && <BurgerConstructorTopElement
                    name={burgerData.topBun.name}
                    image_mobile={burgerData.topBun.image_mobile}
                    price={burgerData.topBun.price}/>
            }

            {burgerData.ingredients && <BurgerConstructorList ingredients={burgerData.ingredients}/>}
            <div className={styles.bottom}>
                {
                    burgerData.bottomBun && <BurgerConstructorBottomElement
                        name={burgerData.bottomBun.name}
                        image_mobile={burgerData.bottomBun.image_mobile}
                        price={burgerData.bottomBun.price}/>
                }
                <ButtonWithPrice price={priceState}/>
            </div>
        </div>
    );
}
