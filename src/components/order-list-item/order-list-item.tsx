import {FC} from "react";
import {TBurgerIngredient, TOrderListItem} from "../../services/types";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './order-list-item.module.css';
import classNames from "classnames";
import IngredientsIconList from "../ingredients-icon-list/ingredients-icon-list";
import {useSelector} from "../../services/hooks/use-selector";
import {getBurgerIngredientsState} from "../../services/actions/burger-ingredients";
import {ORDER_STATUS_CREATED, ORDER_STATUS_DONE, ORDER_STATUS_PENDING} from "../../constants/constants";

function createImagesArrayAndPrice(ingredients: Array<string>, burgerIngredients: ReadonlyArray<TBurgerIngredient>) {
    let imagesArray: string[] = [];
    let price = 0;

    for (let i = 0; i < ingredients.length; i++) {
        for (let j = 0; j < burgerIngredients.length; j++) {
            if (ingredients[i] === burgerIngredients[j].id) {
                imagesArray.push(burgerIngredients[j].image_mobile);
                price += burgerIngredients[j].price;
                break;
            }
        }
    }

    return {imagesArray, price};
}

const OrderListItem: FC<TOrderListItem> = ({number, createdAt, updatedAt, ingredients, status, name}) => {

    const {burgerIngredients} = useSelector(getBurgerIngredientsState);
    const {imagesArray, price} = createImagesArrayAndPrice(ingredients, burgerIngredients);

    let statusText = '';
    let statusStyle = '';

    if (status === ORDER_STATUS_DONE) {
        statusText = 'Выполнен';
        statusStyle = styles.statusComplete;
    } else if (status === ORDER_STATUS_CREATED) {
        statusText = 'Создан';
        statusStyle = styles.statusCreated;
    } else if (status === ORDER_STATUS_PENDING) {
        statusText = 'Готовится';
        statusStyle = styles.statusInWork;
    } else {
        statusText = 'Отменен';
        statusStyle = styles.statusDenied;
    }

    return (
        <div className={styles.wrapper}>
            <div className={classNames([styles.topLine, 'mb-6'])}>
                <div>#{number}</div>
                <div><FormattedDate date={new Date(createdAt)}/></div>
            </div>
            <div className="text text_type_main-medium mb-2">{name}</div>
            <div className={classNames([statusStyle, 'text text_type_main-default mb-6'])}>
                {statusText}
            </div>
            <div className={styles.bottomLine}>
                <div><IngredientsIconList images={imagesArray}/></div>
                <div className={styles.price}><span
                    className="text text_type_digits-default mr-2">{price}</span><CurrencyIcon type="primary"/>
                </div>
            </div>
        </div>
    )
}

export default OrderListItem;