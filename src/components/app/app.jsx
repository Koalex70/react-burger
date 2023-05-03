import React, {useEffect, useState} from "react";

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
// import data from "../../utils/data";

import styles from "./app.module.css";
import {API_URL} from "../../constants/constants";

export default function App() {

    const [data, setData] = useState([]);

    useEffect(  () => {
        async function fetchData () {
            const response = await fetch(API_URL).catch(error => console.log(error));
            const data = await response.json();
            setData(data.data);
        }
        fetchData().catch(error => console.log(error));
    }, []);

    return (
        <div className={styles.wrapper}>
            <AppHeader/>
            <main>
                <section>
                    <h1 className="text text_type_main-large">Соберите бургер</h1>
                    <div className={styles.constructor}>
                        <BurgerIngredients data={data}/>
                        <BurgerConstructor data={data}/>
                    </div>
                </section>
            </main>
        </div>
    )
}