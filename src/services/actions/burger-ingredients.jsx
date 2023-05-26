import {API_BURGER_INGREDIENTS_ENDPOINT} from "../../constants/constants";
import {request} from "../../utils/api";

export const GET_BURGER_INGREDIENTS_REQUEST = 'GET_BURGER_INGREDIENTS_REQUEST';
export const GET_BURGER_INGREDIENTS_SUCCESS = 'GET_BURGER_INGREDIENTS_SUCCESS';
export const GET_BURGER_INGREDIENTS_FAILED = 'GET_BURGER_INGREDIENTS_FAILED';
export const ADD_BURGER_INGREDIENT_COUNT = 'ADD_BURGER_INGREDIENT_COUNT';
export const REMOVE_BURGER_INGREDIENT_COUNT = 'REMOVE_BURGER_INGREDIENT_COUNT';
export const SET_BURGER_INGREDIENTS_COUNT_ZERO = 'SET_BURGER_INGREDIENTS_COUNT_ZERO';

export function getBurgerIngredients() {
    return function (dispatch) {
        dispatch({
            type: GET_BURGER_INGREDIENTS_REQUEST
        })
        request(API_BURGER_INGREDIENTS_ENDPOINT)
            .then(data => {
                dispatch({
                    type: GET_BURGER_INGREDIENTS_SUCCESS,
                    ingredients: data.data.map((ingredient) => {
                        return {...ingredient, count: 0}
                    })
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_BURGER_INGREDIENTS_FAILED
                });
                console.log(err);
            })
    }
}

