import React from "react";
import styles from './feed-item.module.css';
import FeedItemNoAuth from "../../components/feed-item-no-auth/feed-item-no-auth";

const FeedItemPage = () => {

    return (
        <div className={styles.wrapper}>
            <FeedItemNoAuth/>
        </div>
    )
}

export default FeedItemPage;