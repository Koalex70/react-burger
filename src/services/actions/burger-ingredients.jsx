import {API_BURGER_INGREDIENTS_ENDPOINT, API_URL} from "../../constants/constants";

export const GET_BURGER_INGREDIENTS_REQUEST = 'GET_BURGER_INGREDIENTS_REQUEST';
export const GET_BURGER_INGREDIENTS_SUCCESS = 'GET_BURGER_INGREDIENTS_SUCCESS';
export const GET_BURGER_INGREDIENTS_FAILED = 'GET_BURGER_INGREDIENTS_FAILED';
export const ADD_BURGER_INGREDIENT_COUNT = 'ADD_BURGER_INGREDIENT_COUNT';
export const REMOVE_BURGER_INGREDIENT_COUNT = 'REMOVE_BURGER_INGREDIENT_COUNT';

export function getBurgerIngredients() {
    return function (dispatch) {
        dispatch({
            type: GET_BURGER_INGREDIENTS_REQUEST
        })
        fetch(API_URL + '/' + API_BURGER_INGREDIENTS_ENDPOINT).then(res => {
            return res.ok ? res.json() : res.json().then(err => {
                dispatch({
                    type: GET_BURGER_INGREDIENTS_FAILED
                })
                return Promise.reject(err)
            });
        }).then(data => {
            if (data && data.success) {
                dispatch({
                    type: GET_BURGER_INGREDIENTS_SUCCESS,
                    ingredients: data.data.map((ingredient) => {
                        return {...ingredient, count: 0}
                    })
                })
            } else {
                dispatch({
                    type: GET_BURGER_INGREDIENTS_FAILED
                })
            }
        }).catch(err => {
            dispatch({
                type: GET_BURGER_INGREDIENTS_FAILED
            });
            console.log(err);
        })
    }
}