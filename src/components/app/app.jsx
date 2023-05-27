import React from "react";

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export default function App() {

    return (
        <div className={styles.wrapper}>
            <AppHeader/>
            <main>
                <section>
                    <h1 className="text text_type_main-large">Соберите бургер</h1>
                    <div className={styles.constructor}>
                        <DndProvider backend={HTML5Backend}>
                            <BurgerIngredients/>
                            <BurgerConstructor/>
                        </DndProvider>
                    </div>
                </section>
            </main>
        </div>
    )
}