import React from "react";
import styles from './orders-histore-item.module.css';
import FeedItemAuth from "../../components/feed-item-auth/feed-item-auth";

const OrdersHistoryItemPage = () => {

    return (
        <div className={styles.wrapper}>
            <FeedItemAuth/>
        </div>
    )
}

export default OrdersHistoryItemPage;