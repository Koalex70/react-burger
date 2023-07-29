import reducer from './burger-ingredients';
import * as types from '../actions/burger-ingredients';
import {initialState} from "./burger-ingredients";

describe('burger ingredients reducer', () => {

    const ingredient1 = {
        _id: "643d69a5c3f7b9001cfa093c",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
        count: 0,
        id: "643d69a5c3f7b9001cfa093c",
    };

    const ingredient2 = {
        _id: "643d69a5c3f7b9001cfa0941",
        name: "Биокотлета из марсианской Магнолии",
        type: "main",
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: "https://code.s3.yandex.net/react/code/meat-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
        __v: 0,
        count: 0,
        id: "643d69a5c3f7b9001cfa0941",
    };

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState
        )
    });

    it('should handle GET_BURGER_INGREDIENTS_REQUEST', function () {
        expect(reducer(initialState, {
            type: types.GET_BURGER_INGREDIENTS_REQUEST
        })).toEqual({
            ...initialState,
            burgerIngredientsRequest: true,
        })
    });

    it('should handle GET_BURGER_INGREDIENTS_SUCCESS', function () {
        expect(reducer({
            ...initialState,
            burgerIngredientsRequest: true,
        }, {
            type: types.GET_BURGER_INGREDIENTS_SUCCESS,
            ingredients: [
                ingredient1,
                ingredient2
            ]
        })).toEqual({
            burgerIngredientsRequest: false,
            burgerIngredientsFailed: false,
            burgerIngredients: [
                ingredient1,
                ingredient2
            ]
        })
    });

    it('should handle GET_BURGER_INGREDIENTS_FAILED', function () {
        expect(reducer({
            ...initialState,
            burgerIngredientsRequest: true,
        }, {
            type: types.GET_BURGER_INGREDIENTS_FAILED
        })).toEqual({
            ...initialState,
            burgerIngredientsFailed: true,
        })
    });

    it('should handle ADD_BURGER_INGREDIENT_COUNT', function () {
        expect(reducer({
            ...initialState,
            burgerIngredients: [
                ingredient1,
                ingredient2
            ]
        }, {
            type: types.ADD_BURGER_INGREDIENT_COUNT,
            id: '643d69a5c3f7b9001cfa0941'
        })).toEqual({
            ...initialState,
            burgerIngredients: [
                ingredient1,
                {...ingredient2, count: 1}
            ]
        })
    });

    it('should handle REMOVE_BURGER_INGREDIENT_COUNT', function () {
        expect(reducer({
            ...initialState,
            burgerIngredients: [
                ingredient1,
                {...ingredient2, count: 1}
            ]
        }, {
            type: types.REMOVE_BURGER_INGREDIENT_COUNT,
            id: '643d69a5c3f7b9001cfa0941'
        })).toEqual({
            ...initialState,
            burgerIngredients: [
                ingredient1,
                ingredient2
            ]
        })
    });

    it('should handle SET_BURGER_INGREDIENTS_COUNT_ZERO', function () {
        expect(reducer({
            ...initialState,
            burgerIngredients: [
                {...ingredient1, count: 1},
                {...ingredient2, count: 3}
            ]
        }, {
            type: types.SET_BURGER_INGREDIENTS_COUNT_ZERO
        })).toEqual({
            ...initialState,
            burgerIngredients: [
                ingredient1,
                ingredient2
            ]
        })
    });
})