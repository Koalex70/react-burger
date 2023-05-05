import React from "react";

import styles from "./modal-overlay.module.css";
import {createPortal} from "react-dom";
import {MODAL_ROOT} from "../../constants/constants";
import PropTypes from "prop-types";


export default function ModalOverlay (props) {
    return (
        <div className={styles.modalOverlay} onClick={props.onClose}>
        </div>
    );
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
}

