import {TBurgerConstructorBun, TBurgerConstructorElementIngredient, TBurgerConstructorIngredient} from "../types";
import {TBurgerConstructorState} from "../reducers/burger-constructor";

export const UPDATE_BURGER_CONSTRUCTOR_BUN: "UPDATE_BURGER_CONSTRUCTOR_BUN" = 'UPDATE_BURGER_CONSTRUCTOR_BUN';
export const ADD_BURGER_CONSTRUCTOR_INGREDIENT: "ADD_BURGER_CONSTRUCTOR_INGREDIENT" = 'ADD_BURGER_CONSTRUCTOR_INGREDIENT';
export const DELETE_BURGER_CONSTRUCTOR_INGREDIENT: "DELETE_BURGER_CONSTRUCTOR_INGREDIENT" = 'DELETE_BURGER_CONSTRUCTOR_INGREDIENT';
export const SET_BURGER_CONSTRUCTOR_INGREDIENTS: "SET_BURGER_CONSTRUCTOR_INGREDIENTS" = 'SET_BURGER_CONSTRUCTOR_INGREDIENTS';
export const SET_BURGER_CONSTRUCTOR_INITIAL_STATE: "SET_BURGER_CONSTRUCTOR_INITIAL_STATE" = 'SET_BURGER_CONSTRUCTOR_INITIAL_STATE';

export interface IUpdateBurgerConstructorBun {
    readonly type: typeof UPDATE_BURGER_CONSTRUCTOR_BUN;
    readonly bun: TBurgerConstructorBun;
}

export interface IAddBurgerConstructorIngredient {
    readonly type: typeof ADD_BURGER_CONSTRUCTOR_INGREDIENT;
    readonly ingredient: TBurgerConstructorIngredient;
}

export interface IDeleteBurgerConstructorIngredient {
    readonly type: typeof DELETE_BURGER_CONSTRUCTOR_INGREDIENT;
    readonly uuid: string;
}

export interface ISetBurgerConstructorIngredients {
    readonly type: typeof SET_BURGER_CONSTRUCTOR_INGREDIENTS;
    readonly ingredients: Array<TBurgerConstructorElementIngredient>
}

export interface ISetBurgerConstructorInitialState {
    readonly type: typeof SET_BURGER_CONSTRUCTOR_INITIAL_STATE;
}

export type TBurgerConstructorActions =
    | IUpdateBurgerConstructorBun
    | IAddBurgerConstructorIngredient
    | IDeleteBurgerConstructorIngredient
    | ISetBurgerConstructorIngredients
    | ISetBurgerConstructorInitialState;

export function getBurgerConstructorState(state: { burgerConstructor: TBurgerConstructorState; }): TBurgerConstructorState {
    return state.burgerConstructor
}