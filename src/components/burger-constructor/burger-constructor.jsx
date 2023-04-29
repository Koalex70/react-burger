import React, {useEffect} from "react";
import BurgerConstructorTopElement from "../burger-constructor-top-element/burger-constructor-top-element";
import BurgerConstructorBottomElement from "../burger-constructor-bottom-element/burger-constructor-bottom-element";
import ButtonWithPrice from "../button-with-price/button-with-price";
import styles from "./burger-constructor.module.css";
import BurgerConstructorList from "../burger-constructor-list/burger-constructor-list";
import PropTypes from "prop-types";

export default function BurgerConstructor(props) {

    const [bun, setBun] = React.useState(props.data.filter((ingredient) => ingredient.type === 'bun' && ingredient.__v > 0)[0]);
    const [ingredients, setIngredients] = React.useState(props.data.filter((ingredient) =>ingredient.__v > 0));

    useEffect(() => {
        setBun(props.data.filter((ingredient) => ingredient.type === 'bun' && ingredient.__v > 0)[0]);
        setIngredients(props.data.filter((ingredient) =>ingredient.__v > 0));
    }, [props.data]);

    return (
        <div className={styles.container}>
            <BurgerConstructorTopElement bun={bun}/>
            <BurgerConstructorList ingredients={ingredients}/>
            <div className={styles.bottom}>
                <BurgerConstructorBottomElement bun={bun}/>
                <ButtonWithPrice price="123"/>
            </div>
        </div>
    );
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

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(dataPropTypes)
}