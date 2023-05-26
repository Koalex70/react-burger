import React, {useEffect, useRef, useState} from "react";

import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-ingredients.module.css";
import BurgerIngredientsList from "../burger-ingredients-list/burger-ingredients-list";
import {BUN, SAUCE, MAIN} from "../../constants/constants";

import {useDispatch, useSelector} from "react-redux";
import {getBurgerIngredients} from "../../services/actions/burger-ingredients";
import classNames from "classnames";

export default function BurgerIngredients() {
    const [current, setCurrent] = useState(BUN);

    const listsRef = useRef(null);
    const bunsRef = useRef(null);
    const saucesRef = useRef(null);
    const mainsRef = useRef(null);

    const dispatch = useDispatch();

    const {
        burgerIngredientsRequest,
        burgerIngredientsFailed,
    } = useSelector(state => state.burgerIngredients);

    useEffect(() => {
        dispatch(getBurgerIngredients());
    }, [dispatch]);

    if (burgerIngredientsRequest) {
        return <p>Загрузка...</p>
    } else if (burgerIngredientsFailed) {
        return <p>Произошла ошибка при получении данных</p>
    }

    const handleScroll = (event) => {
        const listTop = event.currentTarget.scrollTop;

        const buns = bunsRef.current?.getBoundingClientRect();
        const sauces =  saucesRef.current?.getBoundingClientRect();
        const mains = mainsRef.current?.getBoundingClientRect();

        const bunsMiddleY = (buns.bottom - buns.top) / 2;
        const saucesMiddleY = (sauces.bottom - sauces.top) / 2;
        const mainsMiddleY = (mains.bottom - mains.top) / 2;

        if (bunsMiddleY >= listTop && listTop < saucesMiddleY) {
            setCurrent(BUN)
        } else if (saucesMiddleY <= listTop && listTop < mainsMiddleY) {
            setCurrent(SAUCE)
        } else if (mainsMiddleY <= listTop) {
            setCurrent(MAIN)
        }
    };

    return (
        <div className={styles.container}>
            <div className={classNames([styles.tabs, "text text_type_main-default"])}>
                <Tab value={BUN} active={current === BUN} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value={SAUCE} active={current === SAUCE} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value={MAIN} active={current === MAIN} onClick={setCurrent}>
                    Начинка
                </Tab>
            </div>
            <div className={styles.list} onScroll={handleScroll} ref={listsRef}>
                <BurgerIngredientsList id={BUN} title="Булки" filter={BUN} ref={bunsRef}/>
                <BurgerIngredientsList id={SAUCE} title="Соусы" filter={SAUCE} ref={saucesRef}/>
                <BurgerIngredientsList id={MAIN} title="Начинка" filter={MAIN} ref={mainsRef}/>
            </div>
        </div>
    )
}