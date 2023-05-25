import {
    ADD_BURGER_INGREDIENT_COUNT,
    GET_BURGER_INGREDIENTS_FAILED,
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS, REMOVE_BURGER_INGREDIENT_COUNT,
} from "../actions/burger-ingredients";

const initialState = {
    burgerIngredientsRequest: false,
    burgerIngredientsFailed: false,
    burgerIngredients: null
}

export const burgerIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BURGER_INGREDIENTS_REQUEST: {
            return {
                ...state,
                burgerIngredientsRequest: true,
                burgerIngredientsFailed: false,
            };
        }
        case GET_BURGER_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                burgerIngredients: action.ingredients,
                burgerIngredientsRequest: false
            };
        }
        case GET_BURGER_INGREDIENTS_FAILED: {
            return {
                ...state,
                burgerIngredientsFailed: true,
                burgerIngredientsRequest: false
            };
        }
        case ADD_BURGER_INGREDIENT_COUNT: {
            return {
                ...state,
                burgerIngredients: [...state.burgerIngredients.map(ingredient => ingredient._id === action.id ? {...ingredient, count: ingredient.count + 1} : ingredient)]
            }
        }
        case REMOVE_BURGER_INGREDIENT_COUNT: {
            return {
                ...state,
                burgerIngredients: [...state.burgerIngredients.map(ingredient => ingredient._id === action.id ? {...ingredient, count: ingredient.count - 1} : ingredient)]
            }
        }
        default: {
            return state
        }
    }
}