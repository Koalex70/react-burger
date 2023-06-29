import React, {FC} from "react";

import {
    ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-bottom-element.module.css";

type IBurgerConstructorBottomElement = {
    name: string;
    image_mobile: string;
    price: number
}

const BurgerConstructorBottomElement: FC<IBurgerConstructorBottomElement> = ({name, image_mobile, price}) => {

    return (
        <div>
            <ConstructorElement text={name + ' (низ)'} thumbnail={image_mobile} price={price}
                                type={"bottom"} isLocked={true} extraClass={styles.element}/>
        </div>
    );
}

export default BurgerConstructorBottomElement