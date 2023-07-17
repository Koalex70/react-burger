import React, {FC} from "react";
import {useParams} from "react-router-dom";
import classNames from "classnames";
import styles from './feed-item.module.css';
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "../../services/hooks/use-selector";
import {getBurgerIngredientsState} from "../../services/actions/burger-ingredients";
import {TBurgerIngredient, TMessage} from "../../services/types";
import {ORDER_STATUS_CREATED, ORDER_STATUS_DONE, ORDER_STATUS_PENDING} from "../../constants/constants";

function findIngredient(id: string, burgerIngredients: ReadonlyArray<TBurgerIngredient>) {
    return burgerIngredients.find(ingredient => ingredient.id === id);
}

function countOccurrences(arr: string[]): { [key: string]: number } {
    return arr.reduce((countMap: { [key: string]: number }, element: string) => {
        countMap[element] = (countMap[element] || 0) + 1;
        return countMap;
    }, {});
}

type TFeedItem = {
    message: TMessage;
}

const FeedItem:FC<TFeedItem> = ({message}) => {

    const {id} = useParams();
    const {burgerIngredients} = useSelector(getBurgerIngredientsState);

    const order = message.orders.find(order => order._id === id);

    if (!order) {
        return <></>
    }

    const ingredientsWithCount = countOccurrences(order.ingredients);

    let ingredients = [];
    let totalPrice = 0;

    for (const key in ingredientsWithCount) {
        if (ingredientsWithCount.hasOwnProperty(key)) {
            let temp = findIngredient(key, burgerIngredients);
            totalPrice += temp ? temp.price * ingredientsWithCount[key] : 0;
            ingredients.push({...temp, count: ingredientsWithCount[key]});
        }
    }
    let status = '';
    let statusStyle;

    if (order.status === ORDER_STATUS_DONE) {
        status = 'Выполнен';
        statusStyle = styles.statusComplete;
    } else if (order.status === ORDER_STATUS_CREATED) {
        status = 'Создан';
        statusStyle = styles.statusCreated;
    } else if (order.status === ORDER_STATUS_PENDING) {
        status = 'Готовится';
        statusStyle = styles.statusInWork;
    } else {
        status = 'Отменен';
        statusStyle = styles.statusDenied;
    }

    return (
        <div className={styles.wrapper}>
            <div className={classNames(['mb-10 text text_type_digits-default', styles.number])}>
                #{order.number}
            </div>
            <div className='mb-3 text text_type_main-default'>
                {order.name}
            </div>
            <div className={classNames([' text text_type_main-small mb-15', statusStyle])}>
                {status}
            </div>
            <div className='mb-6 text text_type_main-default'>
                Состав:
            </div>
            <div className={classNames(['mb-10', styles.items])}>
                {ingredients.map((ingredient, index) => {
                    return <div key={index} className={classNames([styles.item, 'mb-6'])}>
                        <div className={styles.icon}>
                            <div className={styles.black}>
                                <img src={ingredient?.image_mobile} alt="icon"/>
                            </div>
                        </div>
                        <div className={classNames(['text text_type_main-default', styles.name])}>
                            {ingredient?.name}
                        </div>
                        <div className={classNames([styles.price, 'text text_type_digits-default mr-6'])}>
                            <span className='mr-2'>{ingredient.count} x {ingredient?.price}</span>
                            <CurrencyIcon type="primary"/>
                        </div>
                    </div>
                })}
            </div>
            <div className={styles.footer}>
                <div className='text text_type_main-default text_color_inactive'>
                    {<FormattedDate date={new Date(order.createdAt)}/>}
                </div>
                <div className={classNames([styles.price, 'text text_type_digits-default'])}>
                    <span className='mr-2'>{totalPrice}</span>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </div>
    )
}

export default FeedItem;