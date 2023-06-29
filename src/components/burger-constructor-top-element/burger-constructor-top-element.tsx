import React, {FC} from "react";

import {
    ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor-top-element.module.css"

type IBurgerConstructorTopElement = {
    name: string;
    image_mobile: string;
    price: number
}
const BurgerConstructorTopElement: FC<IBurgerConstructorTopElement> = ({name, image_mobile, price}) => {

    return (
        <div>
            <ConstructorElement text={name + ' (верх)'} thumbnail={image_mobile} price={price}
                                type={"top"} isLocked={true} extraClass={styles.element}/>
        </div>
    );
}

export default BurgerConstructorTopElement;