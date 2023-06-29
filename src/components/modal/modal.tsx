import React, {FC, useEffect} from "react";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import styles from "./modal.module.css"
import {createPortal} from 'react-dom';
import {MODAL_ROOT, ECS_CODE} from "../../constants/constants";
import ModalOverlay from "../modal-overlay/modal-overlay";
import {TModal} from "../../services/types";

const Modal:FC<TModal> = ({onClose, title, children}) => {

    useEffect(() => {
        const onKeyPressHandler = (e: { keyCode: number; }) => {
            if (e.keyCode === ECS_CODE) {
                onClose();
            }
        }

        window.addEventListener('keydown', onKeyPressHandler);
        return () => window.removeEventListener('keydown', onKeyPressHandler)
    }, [onClose]);

    return createPortal((
        <>
            <ModalOverlay onClose={onClose}/>
            <div className={styles.modal}>
                <div className={styles.header}>
                    {title && <h3 className="text text_type_main-large">{title}</h3>}
                    <div className={styles.iconClose} onClick={onClose}>
                        <CloseIcon type={"secondary"}/>
                    </div>
                </div>
                {children}
            </div>
        </>
        ),
        MODAL_ROOT as HTMLElement
    );
}

export default Modal;