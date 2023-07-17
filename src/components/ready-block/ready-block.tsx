import React, {FC} from "react";
import styles from './ready-block.module.css';
import classNames from "classnames";
import {TOrder} from "../../services/types";

export type TReadyBlock = {
    total: number;
    totalToday: number;
    ordersReady?: TOrder[];
    ordersInWork?: TOrder[];
};

const ReadyBlock: FC<TReadyBlock> = ({total, totalToday, ordersReady, ordersInWork}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.status}>
                <div className={styles.statusReady}>
                    <div className='text text_type_main-medium'>
                        Готовы:
                    </div>
                    <ul className={styles.numberList}>
                        {ordersReady?.map((order) => {
                            return <li key={order._id} className='text text_type_digits-default'>
                                {order.number}
                            </li>
                        })}
                    </ul>
                </div>
                <div className={styles.statusInWork}>
                    <div className='text text_type_main-medium'>
                        В работе:
                    </div>
                    <ul className={styles.numberList}>
                        {ordersInWork?.map((order) => {
                            return <li key={order._id} className='text text_type_digits-default'>
                                {order.number}
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            <div className='mb-15'>
                <div className='text text_type_main-medium'>
                    Выполнено за все время:
                </div>
                <div className={classNames(['text text_type_digits-large', styles.largeDigits])}>
                    {total}
                </div>
            </div>
            <div>
                <div className='text text_type_main-medium'>
                    Выполнено за сегодня:
                </div>
                <div className={classNames(['text text_type_digits-large', styles.largeDigits])}>
                    {totalToday}
                </div>
            </div>
        </div>
    )
}

export default ReadyBlock;