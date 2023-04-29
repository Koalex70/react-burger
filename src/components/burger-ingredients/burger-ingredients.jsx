import React, {useEffect} from "react";

import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-ingredients.module.css";
import BurgerIngredientsList from "../burger-ingredients-list/burger-ingredients-list";

import PropTypes from 'prop-types';

export default function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('one');

    let [sauce, setSauce] = React.useState([]);
    let [bun, setBun] = React.useState([]);
    let [main, setMain] = React.useState([]);

    useEffect(() => {
        setSauce(props.data.filter((ingredient) => ingredient.type === 'sauce'));
        setBun(props.data.filter((ingredient) => ingredient.type === 'bun'));
        setMain(props.data.filter((ingredient) => ingredient.type === 'main'));
    }, [props.data]);

    return (
        <div className={styles.container}>
            <div style={{display: 'flex'}} className={"text text_type_main-default"}>
                <a href="#bun">
                    <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                        Булки
                    </Tab>
                </a>
                <a href="#sauce">
                    <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                        Соусы
                    </Tab>
                </a>
                <a href="#main">
                    <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                        Начинка
                    </Tab>
                </a>
            </div>
            <div className={styles.list}>
                <a name="bun">
                    <BurgerIngredientsList id="bun" title="Булки" list={bun}/>
                </a>
                <a name="sauce">
                    <BurgerIngredientsList id="sauce" title="Соусы" list={sauce}/>
                </a>
                <a name="main">
                    <BurgerIngredientsList id="main" title="Начинка" list={main}/>
                </a>
            </div>
        </div>
    )
}

const dataPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["bun", "sauce", "main"]).isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number.isRequired
});

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(dataPropTypes)
}