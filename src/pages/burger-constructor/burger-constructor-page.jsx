import React from "react";

import styles from "./burger-constructor-page.module.css";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";

const BurgerConstructorPage = () => {
    return (
        <div className={styles.wrapper}>
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

export default BurgerConstructorPage;
