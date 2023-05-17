import React, {useContext, useEffect, useMemo} from "react";
import BurgerConstructorTopElement from "../burger-constructor-top-element/burger-constructor-top-element";
import BurgerConstructorBottomElement from "../burger-constructor-bottom-element/burger-constructor-bottom-element";
import ButtonWithPrice from "../button-with-price/button-with-price";
import styles from "./burger-constructor.module.css";
import BurgerConstructorList from "../burger-constructor-list/burger-constructor-list";
import {DataContext} from "../../services/contexts/appContext";
import {useState} from "react";
import {BUN} from "../../constants/constants";

export default function BurgerConstructor() {

    const [burgerData, setBurgerData] = useState({topBun: null, bottomBun: null, ingredients: null});

    const data = useContext(DataContext);

    const bun = useMemo(() => data.filter((ingredient) => ingredient.type === BUN)[0], [data]);
    const ingredients = useMemo(() => data.filter((ingredient) => ingredient.type !== BUN), [data]);

    useEffect(() => {
        setBurgerData({
            topBun: bun,
            bottomBun: bun,
            ingredients: ingredients
        });
    }, [data]);

    const price = useMemo(() => {
        let price = burgerData.ingredients ? burgerData.ingredients.reduce((acc, curr) => acc + curr.price, 0) : 0;
        price += burgerData.topBun ? burgerData.topBun.price : 0;
        price += burgerData.bottomBun ? burgerData.bottomBun.price : 0;

        return price;
    }, [burgerData]);

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
                <ButtonWithPrice price={price} burgerData={burgerData}/>
            </div>
        </div>
    );
}
