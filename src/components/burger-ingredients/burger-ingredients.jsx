import React, {useContext, useEffect, useMemo} from "react";

import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-ingredients.module.css";
import BurgerIngredientsList from "../burger-ingredients-list/burger-ingredients-list";
import {BUN, SAUCE, MAIN, DATA_PROP_TYPES} from "../../constants/constants";

import PropTypes from 'prop-types';
import {DataContext} from "../../services/contexts/appContext";

export default function BurgerIngredients() {
    const [current, setCurrent] = React.useState(BUN);

    const data = useContext(DataContext);

    const bun = useMemo(() => data.filter((ingredient) => ingredient.type === BUN), [data]);
    const sauce = useMemo(() => data.filter((ingredient) => ingredient.type === SAUCE), [data]);
    const main = useMemo(() => data.filter((ingredient) => ingredient.type === MAIN), [data]);

    return (
        <div className={styles.container}>
            <div style={{display: 'flex'}} className={"text text_type_main-default"}>
                <a href="#bun">
                    <Tab value={BUN} active={current === BUN} onClick={setCurrent}>
                        Булки
                    </Tab>
                </a>
                <a href="#sauce">
                    <Tab value={SAUCE} active={current === SAUCE} onClick={setCurrent}>
                        Соусы
                    </Tab>
                </a>
                <a href="#main">
                    <Tab value={MAIN} active={current === MAIN} onClick={setCurrent}>
                        Начинка
                    </Tab>
                </a>
            </div>
            <div className={styles.list}>
                <a name={BUN}>
                    <BurgerIngredientsList id={BUN} title="Булки" list={bun}/>
                </a>
                <a name={SAUCE}>
                    <BurgerIngredientsList id={SAUCE} title="Соусы" list={sauce}/>
                </a>
                <a name={MAIN}>
                    <BurgerIngredientsList id={MAIN} title="Начинка" list={main}/>
                </a>
            </div>
        </div>
    )
}

// BurgerIngredients.propTypes = {
//     data: PropTypes.arrayOf(DATA_PROP_TYPES).isRequired
// }