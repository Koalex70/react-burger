import {
    SET_BURGER_INGREDIENT_DETAILS,
    DELETE_BURGER_INGREDIENT_DETAILS,
} from "../actions/ingredient-details";

const initialState = {
    details: null
}

export const ingredientDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BURGER_INGREDIENT_DETAILS: {
            return {
                ...state,
                details: action.details
            }
        }
        case DELETE_BURGER_INGREDIENT_DETAILS: {
            return {
                ...state,
                details: null
            }
        }
        default: {
            return state;
        }
    }
}