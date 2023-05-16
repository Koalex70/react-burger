import React from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./button-with-price.module.css";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {useContext} from 'react';
import {BurgerConstructorContext} from "../../services/contexts/appContext";
import {createOrder} from "../../utils/api";

function parseIngredientsIds(burgerData) {
    let ids = {ingredients: []};

    ids.ingredients.push(burgerData.topBun._id);
    ids.ingredients.push(burgerData.bottomBun._id);

    burgerData.ingredients.forEach(ingredient => {
        ids.ingredients.push(ingredient._id);
    });

    return ids;
}

export default function ButtonWithPrice({price}) {

    const [visible, setVisible] = React.useState(false);
    const [burgerData] = useContext(BurgerConstructorContext);
    const [orderDetails, setOrderDetails] = React.useState({});

    const handleOpenModal = () => {
        createOrder(parseIngredientsIds(burgerData))
            .then(data => {
                if (data.success) {
                    setOrderDetails({
                        name: data.name,
                        orderNumber: data.order.number
                    });
                    setVisible(true);
                }
                else {
                    alert('Не получилось оформить заказ');
                }
            });

    }

    const handleCloseModal = () => {
        setVisible(false);
    }

    const modal = (
        <Modal show={visible} onClose={handleCloseModal}>
            <OrderDetails name={orderDetails.name} orderNumber={orderDetails.orderNumber}/>
        </Modal>
    );

    return (
        <>
            <div className={styles.container}>
                <span className={styles.price}>{price.price}</span>
                <div className={styles.currency}>
                    <CurrencyIcon type={"primary"}/>
                </div>
                <Button htmlType={"submit"} type={"primary"} size="medium" onClick={handleOpenModal}>
                    Оформить заказ
                </Button>
            </div>
            {visible && modal}
        </>
    )
}

ButtonWithPrice.propTypes = {
    price: PropTypes.shape({
        price: PropTypes.number.isRequired
    }).isRequired,
}