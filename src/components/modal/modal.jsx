import React, {useEffect} from "react";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import styles from "./modal.module.css"
import {createPortal} from 'react-dom';
import {MODAL_ROOT, ECS_CODE} from "../../constants/constants";
import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay";

export default function Modal(props) {

    useEffect(() => {
        const onKeyPressHandler = (e) => {
            if (e.keyCode === ECS_CODE) {
                props.onClose();
            }
        }

        window.addEventListener('keydown', onKeyPressHandler);
        return () => window.removeEventListener('keydown', onKeyPressHandler)
    }, [props]);

    if (!props.show) {
        return null;
    }

    return createPortal((
        <>
            <ModalOverlay onClose={props.onClose}/>
            <div className={styles.modal}>
                <div className={styles.header}>
                    {props.title && <h3 className="text text_type_main-large">{props.title}</h3>}
                    <div className={styles.iconClose} onClick={props.onClose}>
                        <CloseIcon type={"secondary"}/>
                    </div>
                </div>
                {props.children}
            </div>
        </>
        ),
        MODAL_ROOT
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.any,
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
}