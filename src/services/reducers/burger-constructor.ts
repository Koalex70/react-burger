import {
    UPDATE_BURGER_CONSTRUCTOR_BUN,
    ADD_BURGER_CONSTRUCTOR_INGREDIENT,
    DELETE_BURGER_CONSTRUCTOR_INGREDIENT,
    SET_BURGER_CONSTRUCTOR_INGREDIENTS,
    SET_BURGER_CONSTRUCTOR_INITIAL_STATE, TBurgerConstructorActions
} from "../actions/burger-constructor";
import {TBurgerConstructorBun, TBurgerConstructorIngredient} from "../types";

export type TBurgerConstructorState = {
    bun: TBurgerConstructorBun | null;
    ingredients: Array<TBurgerConstructorIngredient>;
}

const initialState: TBurgerConstructorState = {
    bun: null,
    ingredients: []
}

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions): TBurgerConstructorState => {
    switch (action.type) {
        case UPDATE_BURGER_CONSTRUCTOR_BUN: {
            return {
                ...state,
                bun: action.bun
            }
        }
        case SET_BURGER_CONSTRUCTOR_INGREDIENTS: {
            return {
                ...state,
                ingredients: action.ingredients
            }
        }
        case ADD_BURGER_CONSTRUCTOR_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients, action.ingredient]
            }
        }
        case DELETE_BURGER_CONSTRUCTOR_INGREDIENT: {
            return {
                ...state,
                ingredients: state.ingredients.filter(ingredient => ingredient.uuid !== action.uuid)
            }
        }
        case SET_BURGER_CONSTRUCTOR_INITIAL_STATE: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export default burgerConstructorReducer;