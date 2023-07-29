import React, {FC, useRef, useState} from "react";

import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-ingredients.module.css";
import BurgerIngredientsList from "../burger-ingredients-list/burger-ingredients-list";
import {BUN, SAUCE, MAIN} from "../../constants/constants";

import classNames from "classnames";
import {getBurgerIngredientsState} from "../../services/actions/burger-ingredients";
import {useSelector} from "../../services/hooks/use-selector";

const BurgerIngredients: FC = () => {
    const [current, setCurrent] = useState(BUN);

    const listsRef = useRef<HTMLDivElement>(null);
    const bunsRef = useRef<HTMLDivElement>(null);
    const saucesRef = useRef<HTMLDivElement>(null);
    const mainsRef = useRef<HTMLDivElement>(null);

    const {
        burgerIngredientsRequest,
        burgerIngredientsFailed,
    } = useSelector(getBurgerIngredientsState);

    if (burgerIngredientsRequest) {
        return <p>Загрузка...</p>
    } else if (burgerIngredientsFailed) {
        return <p>Произошла ошибка при получении данных</p>
    }

    const handleScroll = (event: React.UIEvent<HTMLDivElement>): void => {
        const listTop = event.currentTarget.scrollTop;

        const buns = bunsRef.current?.getBoundingClientRect();
        const sauces = saucesRef.current?.getBoundingClientRect();
        const mains = mainsRef.current?.getBoundingClientRect();

        if (!buns || !sauces || !mains) {
            return;
        }

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
            <div className={styles.list} onScroll={handleScroll} ref={listsRef} data-cy="ingredients">
                <BurgerIngredientsList title="Булки" filter={BUN} ref={bunsRef}/>
                <BurgerIngredientsList title="Соусы" filter={SAUCE} ref={saucesRef}/>
                <BurgerIngredientsList title="Начинка" filter={MAIN} ref={mainsRef}/>
            </div>
        </div>
    )
}

export default BurgerIngredients;