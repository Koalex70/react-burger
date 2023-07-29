import {
    ADD_BURGER_INGREDIENT_COUNT,
    GET_BURGER_INGREDIENTS_FAILED,
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS,
    REMOVE_BURGER_INGREDIENT_COUNT,
    SET_BURGER_INGREDIENTS_COUNT_ZERO,
    TBurgerIngredientsActions,
} from "../actions/burger-ingredients";
import {TBurgerIngredient} from "../types";

export type TBurgerIngredientsState = {
    burgerIngredientsRequest: boolean;
    burgerIngredientsFailed: boolean;
    burgerIngredients: ReadonlyArray<TBurgerIngredient>
}

export const initialState: TBurgerIngredientsState = {
    burgerIngredientsRequest: false,
    burgerIngredientsFailed: false,
    burgerIngredients: []
}

export const burgerIngredientsReducer = (state = initialState, action: TBurgerIngredientsActions): TBurgerIngredientsState => {
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
                burgerIngredients: [...state.burgerIngredients.map(ingredient => ingredient._id === action.id ? {
                    ...ingredient,
                    count: ingredient.count + 1
                } : ingredient)]
            }
        }
        case REMOVE_BURGER_INGREDIENT_COUNT: {
            return {
                ...state,
                burgerIngredients: [...state.burgerIngredients.map(ingredient => ingredient._id === action.id ? {
                    ...ingredient,
                    count: ingredient.count - 1
                } : ingredient)]
            }
        }
        case SET_BURGER_INGREDIENTS_COUNT_ZERO: {
            return {
                ...state,
                burgerIngredients: [...state.burgerIngredients.map(ingredient => {
                    return {...ingredient, count: 0}
                })]
            }
        }
        default: {
            return state
        }
    }
}

export default burgerIngredientsReducer;