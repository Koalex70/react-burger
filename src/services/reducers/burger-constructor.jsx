import {
    UPDATE_BURGER_CONSTRUCTOR_BUN,
    ADD_BURGER_CONSTRUCTOR_INGREDIENTS,
    DELETE_BURGER_CONSTRUCTOR_INGREDIENTS,
    SET_BURGER_CONSTRUCTOR_INGREDIENTS
} from "../actions/burger-constructor";

const initialState = {
    bun: null,
    ingredients: []
}

export const burgerConstructorReducer = (state = initialState, action) => {
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
        case ADD_BURGER_CONSTRUCTOR_INGREDIENTS: {
            return {
                ...state,
                ingredients: [...state.ingredients, action.ingredients]
            }
        }
        case DELETE_BURGER_CONSTRUCTOR_INGREDIENTS: {
            return {
                ...state,
                ingredients: state.ingredients.filter(ingredient => ingredient.uuid !== action.uuid)
            }
        }
        default: {
            return state;
        }
    }
}