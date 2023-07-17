import {TOrderListItem} from "../../services/types";
import OrderListItem from "../order-list-item/order-list-item";
import styles from './order-list.module.css'
import {FC} from "react";
import {Link, useLocation} from "react-router-dom";

type TOrderList = {
    orders: ReadonlyArray<TOrderListItem>,
    to: string
}

const OrderList: FC<TOrderList> = ({orders, to}) => {

    const location = useLocation();

    return (
        <div className={styles.wrapper}>
            {
                orders.map(order => {
                    return <Link to={to + '/' + order._id} state={{background: location}} key={order._id} >
                        <OrderListItem
                            number={order.number}
                            createdAt={order.createdAt}
                            ingredients={order.ingredients}
                            status={order.status}
                            updatedAt={order.updatedAt}
                            name={order.name}
                        />
                    </Link>
                })
            }
        </div>
    )
}

export default OrderList;