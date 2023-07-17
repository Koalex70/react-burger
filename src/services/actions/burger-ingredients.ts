import {API_BURGER_INGREDIENTS_ENDPOINT} from "../../constants/constants";
import {request} from "../../utils/api";
import {AppDispatch, AppThunk, TBurgerIngredient} from "../types";
import {TBurgerIngredientsState} from "../reducers/burger-ingredients";

export const GET_BURGER_INGREDIENTS_REQUEST: 'GET_BURGER_INGREDIENTS_REQUEST' = 'GET_BURGER_INGREDIENTS_REQUEST';
export const GET_BURGER_INGREDIENTS_SUCCESS: 'GET_BURGER_INGREDIENTS_SUCCESS' = 'GET_BURGER_INGREDIENTS_SUCCESS';
export const GET_BURGER_INGREDIENTS_FAILED: 'GET_BURGER_INGREDIENTS_FAILED' = 'GET_BURGER_INGREDIENTS_FAILED';
export const ADD_BURGER_INGREDIENT_COUNT: 'ADD_BURGER_INGREDIENT_COUNT' = 'ADD_BURGER_INGREDIENT_COUNT';
export const REMOVE_BURGER_INGREDIENT_COUNT: 'REMOVE_BURGER_INGREDIENT_COUNT' = 'REMOVE_BURGER_INGREDIENT_COUNT';
export const SET_BURGER_INGREDIENTS_COUNT_ZERO: 'SET_BURGER_INGREDIENTS_COUNT_ZERO' = 'SET_BURGER_INGREDIENTS_COUNT_ZERO';

export interface IGetBurgerIngredientsRequest {
    readonly type: typeof GET_BURGER_INGREDIENTS_REQUEST;
}

export interface IGetBurgerIngredientsSuccess {
    readonly type: typeof GET_BURGER_INGREDIENTS_SUCCESS;
    readonly ingredients: ReadonlyArray<TBurgerIngredient>;
}

export interface IGetBurgerIngredientsFailed {
    readonly type: typeof GET_BURGER_INGREDIENTS_FAILED;
}

export interface IAddBurgerIngredientCount {
    readonly type: typeof ADD_BURGER_INGREDIENT_COUNT;
    readonly id: string;
}

export interface IRemoveBurgerIngredientCount {
    readonly type: typeof REMOVE_BURGER_INGREDIENT_COUNT;
    readonly id: string;
}

export interface ISetBurgerIngredientsCountZero {
    readonly type: typeof SET_BURGER_INGREDIENTS_COUNT_ZERO;
}

export type TBurgerIngredientsActions =
    | IGetBurgerIngredientsRequest
    | IGetBurgerIngredientsSuccess
    | IGetBurgerIngredientsFailed
    | IAddBurgerIngredientCount
    | IRemoveBurgerIngredientCount
    | ISetBurgerIngredientsCountZero;

export function getBurgerIngredients(): AppThunk {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_BURGER_INGREDIENTS_REQUEST
        })
        request<{ data: Array<TBurgerIngredient> }>(API_BURGER_INGREDIENTS_ENDPOINT)
            .then(body => {

                dispatch({
                    type: GET_BURGER_INGREDIENTS_SUCCESS,
                    ingredients: body.data.map((ingredient) => {
                        return {...ingredient, count: 0, id: ingredient._id}
                    })
                })
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: GET_BURGER_INGREDIENTS_FAILED
                });
            })
    }
}

export function getBurgerIngredientsState(state: {
    burgerIngredients: TBurgerIngredientsState;
}): TBurgerIngredientsState {
    return state.burgerIngredients;
}

