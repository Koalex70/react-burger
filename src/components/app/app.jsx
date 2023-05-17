import React, {useEffect, useState} from "react";

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import {fetchData} from "../../utils/api";
import {DataContext} from "../../services/contexts/appContext";

export default function App() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData()
            .then(result => setData(result))
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
                                <BurgerConstructor/>
                            </DataContext.Provider>
                        </div>
                    </section>
                </main>
            )}
        </div>
    )
}