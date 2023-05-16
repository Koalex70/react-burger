import React, {useEffect, useState} from "react";

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import {fetchData} from "../../utils/api";
import {BurgerConstructorContext, DataContext} from "../../services/contexts/appContext";
import {BUN} from "../../constants/constants";

export default function App() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const burgerConstructorState = useState({topBun: {}, bottomBun: {}, ingredients: []});
    const [, setBurgerConstructor] = burgerConstructorState;

    useEffect(() => {
        fetchData()
            .then((result) => {
                setData(result);

                let bun = result.filter((ingredient) => ingredient.type === BUN)[0];
                let ingredients = result.filter((ingredient) => ingredient.type !== BUN);

                setBurgerConstructor({
                    topBun: bun,
                    bottomBun: bun,
                    ingredients: ingredients
                });
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsLoading(false)
            });
    }, []);


    return (
        <div className={styles.wrapper}>
            <AppHeader/>
            {isLoading ? (<h3>Дождитесь загрузки данных...</h3>) : (
                <main>
                    <section>
                        <h1 className="text text_type_main-large">Соберите бургер</h1>
                        <div className={styles.constructor}>
                            <DataContext.Provider value={data}>
                                <BurgerIngredients/>
                            </DataContext.Provider>
                            <BurgerConstructorContext.Provider value={burgerConstructorState}>
                                <BurgerConstructor/>
                            </BurgerConstructorContext.Provider>
                        </div>
                    </section>
                </main>
            )}
        </div>
    )
}