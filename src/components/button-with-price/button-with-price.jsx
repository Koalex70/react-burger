import React from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./button-with-price.module.css";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

export default function ButtonWithPrice(props) {

    const [visible, setVisible] = React.useState(false);

    const handleOpenModal = () => {
        setVisible(true);
    }

    const handleCloseModal = () => {
        setVisible(false);
    }

    const modal = (
        <Modal show={visible} onClose={handleCloseModal}>
            <OrderDetails/>
        </Modal>
    );

    return (
        <>
            <div className={styles.container}>
                <span className={styles.price}>{props.price}</span>
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
    price: PropTypes.number.isRequired,
}