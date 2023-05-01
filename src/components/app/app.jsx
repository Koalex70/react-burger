import React from "react";

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import data from "../../utils/data";

import styles from "./app.module.css";

export default function App() {
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