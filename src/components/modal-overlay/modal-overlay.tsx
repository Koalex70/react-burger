import React, {FC} from "react";
import styles from "./modal-overlay.module.css";
import {TModalOverlay} from "../../services/types";

const ModalOverlay: FC<TModalOverlay> = ({onClose}) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
        </div>
    );
}

export default ModalOverlay;

