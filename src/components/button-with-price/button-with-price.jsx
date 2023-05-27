import React from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./button-with-price.module.css";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_ORDER_DETAILS, postOrderDetails} from "../../services/actions/order-details";
import {useModal} from "../../hooks/use-modal";

export default function ButtonWithPrice({price}) {

    const dispatch = useDispatch();

    const burgerConstructor = useSelector(state => state.burgerConstructor);
    const {isModalOpen, openModal, closeModal} = useModal();

    const handleOpenModal = () => {

        if (!burgerConstructor.bun || !burgerConstructor.ingredients) return;

        dispatch(postOrderDetails(burgerConstructor));

        openModal();
    }

    const handleCloseModal = () => {
        dispatch({
            type: DELETE_ORDER_DETAILS
        })

        closeModal();
    }

    const modal = (
        <Modal show={isModalOpen} onClose={handleCloseModal}>
            <OrderDetails/>
        </Modal>
    );

    return (
        <>
            <div className={styles.container}>
                <span className={styles.price}>{price}</span>
                <div className={styles.currency}>
                    <CurrencyIcon type={"primary"}/>
                </div>
                <Button htmlType={"submit"} type={"primary"} size="medium" onClick={handleOpenModal}>
                    Оформить заказ
                </Button>
            </div>
            {isModalOpen && modal}
        </>
    )
}

ButtonWithPrice.propTypes = {
    price: PropTypes.number.isRequired
}