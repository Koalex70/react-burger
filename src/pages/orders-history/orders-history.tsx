import React, {useEffect} from "react";
import styles from './orders-history.module.css';
import ProfileTabs from "../../components/profile-tabs/profile-tabs";
import {ORDER_HISTORY, PROFILE_ORDERS_PATH} from "../../constants/constants";
import OrderList from "../../components/order-list/order-list";
import {useDispatch} from "../../services/hooks/use-dispatch";
import {useSelector} from "../../services/hooks/use-selector";
import {
    getWSAuthState,
    WS_CONNECTION_CLOSED_AUTH,
    WS_CONNECTION_START_AUTH
} from "../../services/actions/ws-auth-action-types";

const OrdersHistoryPage = () => {

    const dispatch = useDispatch();
    const {message} = useSelector(getWSAuthState);

    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START_AUTH
        });
        return () => {
            dispatch({
                type: WS_CONNECTION_CLOSED_AUTH
            });
        }
    }, [dispatch]);

    if (!message || !message.orders) {
        return (
            <></>
        )
    }
    const orders = message.orders.sort((a,b)  => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <ProfileTabs activeTab={ORDER_HISTORY}/>
            </div>
            <div className={styles.right}>
                <OrderList orders={orders} to={PROFILE_ORDERS_PATH}/>
            </div>
        </div>
    )
}

export default OrdersHistoryPage;