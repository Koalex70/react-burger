import React, {useEffect} from "react";
import OrderList from "../../components/order-list/order-list";
import styles from './feed.module.css';
import ReadyBlock from "../../components/ready-block/ready-block";
import {FEED_PATH} from "../../constants/constants";
import {useDispatch} from "../../services/hooks/use-dispatch";
import {getWSState, WS_CONNECTION_CLOSED, WS_CONNECTION_START} from "../../services/actions/ws-action-types";
import {useSelector} from "../../services/hooks/use-selector";

export default function FeedPage() {

    const dispatch = useDispatch();
    const {message} = useSelector(getWSState);

    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START
        });
        return () => {
            dispatch({
                type: WS_CONNECTION_CLOSED
            });
        }
    }, [dispatch]);

    if (!message || !message.orders) {
        return (
            <></>
        )
    }

    const total = message.total;
    const totalToday = message.totalToday;
    const orders = message.orders;

    const ordersReady = orders?.filter(order => order.status === 'done');
    const ordersInWork = orders?.filter(order => order.status === 'created');

    return (
        <div className={styles.wrapper}>
            <h3 className="text text_type_main-large mb-6">Лента заказов</h3>
            <div className={styles.row}>
                <div className={styles.half}>
                    <OrderList orders={orders} to={FEED_PATH}/>
                </div>
                <div className={styles.half}>
                    <ReadyBlock total={total} totalToday={totalToday} ordersReady={ordersReady} ordersInWork={ordersInWork}/>
                </div>
            </div>
        </div>
    )
}