import {API_BURGER_ORDERS_ENDPOINT, API_URL} from "../../constants/constants";

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

        fetch(API_URL + '/' + API_BURGER_ORDERS_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(parseIngredientsIds(burgerData))
        }).then(res => {
            return res.ok ? res.json() : res.json().then(err => {
                dispatch({
                    type: POST_ORDER_DETAILS_FAILED
                })
                return Promise.reject(err)
            });
        }).then(data => {
            if (data && data.success) {
                dispatch({
                    type: POST_ORDER_DETAILS_SUCCESS,
                    details: {name: data.name, number: data.order.number}
                })
            } else {
                dispatch({
                    type: POST_ORDER_DETAILS_FAILED
                })
            }
        }).catch(err => {
            dispatch({
                type: POST_ORDER_DETAILS_FAILED
            });
            console.log(err);
        })
    }
}