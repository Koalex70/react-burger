import {API_BURGER_ORDERS_ENDPOINT} from "../../constants/constants";
import {requestWithRefresh} from "../../utils/api";
import {SET_BURGER_CONSTRUCTOR_INITIAL_STATE} from "./burger-constructor";
import {SET_BURGER_INGREDIENTS_COUNT_ZERO} from "./burger-ingredients";

export const POST_ORDER_DETAILS_REQUEST = 'POST_ORDER_DETAILS_REQUEST';
export const POST_ORDER_DETAILS_SUCCESS = 'POST_ORDER_DETAILS_SUCCESS';
export const POST_ORDER_DETAILS_FAILED = 'POST_ORDER_DETAILS_FAILED';
export const DELETE_ORDER_DETAILS = 'DELETE_ORDER_DETAILS';

function parseIngredientsIds(burgerData) {

    if (!burgerData.bun && !burgerData.ingredients) return [];

    let ids = {ingredients: []};

    ids.ingredients.push(burgerData.bun._id);
    ids.ingredients.push(burgerData.bun._id);

    burgerData.ingredients.forEach(ingredient => {
        ids.ingredients.push(ingredient._id);
    });

    return ids;
}

export function postOrderDetails(burgerData) {
    return function (dispatch) {
        dispatch({
            type: POST_ORDER_DETAILS_REQUEST
        });
        requestWithRefresh(API_BURGER_ORDERS_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: localStorage.getItem('token')
            },
            body: JSON.stringify(parseIngredientsIds(burgerData))
        }).then(data => {
            dispatch({
                type: POST_ORDER_DETAILS_SUCCESS,
                details: {name: data.name, number: data.order.number}
            });
            dispatch({
                type: SET_BURGER_CONSTRUCTOR_INITIAL_STATE
            });
            dispatch({
                type: SET_BURGER_INGREDIENTS_COUNT_ZERO
            })
        }).catch(err => {
            dispatch({
                type: POST_ORDER_DETAILS_FAILED
            });
            console.log(err);
        })
    }
}

export function getOrderDetailsState (state) {
    return state.orderDetails;
}