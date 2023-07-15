import {API_BURGER_ORDERS_ENDPOINT} from "../../constants/constants";
import {requestWithRefresh} from "../../utils/api";
import {TBurgerConstructorState} from "../reducers/burger-constructor";
import {SET_BURGER_CONSTRUCTOR_INITIAL_STATE} from "./burger-constructor";
import {SET_BURGER_INGREDIENTS_COUNT_ZERO} from "./burger-ingredients";
import {AppDispatch, TOrderDetails, TOrderDetailsResponse} from "../types";
import {TOrderDetailsState} from "../reducers/order-details";

export const POST_ORDER_DETAILS_REQUEST: 'POST_ORDER_DETAILS_REQUEST' = 'POST_ORDER_DETAILS_REQUEST';
export const POST_ORDER_DETAILS_SUCCESS: 'POST_ORDER_DETAILS_SUCCESS' = 'POST_ORDER_DETAILS_SUCCESS';
export const POST_ORDER_DETAILS_FAILED: 'POST_ORDER_DETAILS_FAILED' = 'POST_ORDER_DETAILS_FAILED';
export const DELETE_ORDER_DETAILS: 'DELETE_ORDER_DETAILS' = 'DELETE_ORDER_DETAILS';

export interface IPostOrderDetailsRequest {
    readonly type: typeof POST_ORDER_DETAILS_REQUEST;
}

export interface IPostOrderDetailsSuccess {
    readonly type: typeof POST_ORDER_DETAILS_SUCCESS;
    readonly details: TOrderDetails;
}

export interface IPostOrderDetailsFailed {
    readonly type: typeof POST_ORDER_DETAILS_FAILED;
}

export interface IDeleteOrderDetails {
    readonly type: typeof DELETE_ORDER_DETAILS;
}

export type TOrderDetailsActions =
    | IPostOrderDetailsRequest
    | IPostOrderDetailsSuccess
    | IPostOrderDetailsFailed
    | IDeleteOrderDetails;

function parseIngredientsIds(burgerData: TBurgerConstructorState) {

    if (!burgerData.bun || !burgerData.ingredients) return [];

    let ids = {ingredients: [] as string[]};

    ids.ingredients.push(burgerData.bun.id);
    ids.ingredients.push(burgerData.bun.id);

    burgerData.ingredients.forEach((ingredient: { id: string; }) => {
        ids.ingredients.push(ingredient.id);
    });

    return ids;
}

export function postOrderDetails(burgerData: TBurgerConstructorState) {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: POST_ORDER_DETAILS_REQUEST
        });

        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=utf-8');
        headers.set('Authorization', localStorage.getItem('token') as string);

        requestWithRefresh<TOrderDetailsResponse>(API_BURGER_ORDERS_ENDPOINT, {
            method: 'POST',
            headers: headers,
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

export function getOrderDetailsState(state: { orderDetails: TOrderDetailsState; }): TOrderDetailsState {
    return state.orderDetails;
}