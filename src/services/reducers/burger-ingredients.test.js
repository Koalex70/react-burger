import reducer from './burger-ingredients';
import * as types from '../actions/burger-ingredients';

describe('burger ingredients reducer', () => {

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            burgerIngredientsRequest: false,
            burgerIngredientsFailed: false,
            burgerIngredients: []
        })
    });

    it('should handle GET_BURGER_INGREDIENTS_REQUEST', function () {
        expect(reducer({
            burgerIngredientsRequest: false,
            burgerIngredientsFailed: false,
            burgerIngredients: []
        }, {
            type: types.GET_BURGER_INGREDIENTS_REQUEST
        })).toEqual({
            burgerIngredientsRequest: true,
            burgerIngredientsFailed: false,
            burgerIngredients: []
        })
    });

    it('should handle GET_BURGER_INGREDIENTS_SUCCESS', function () {
        expect(reducer({
            burgerIngredientsRequest: true,
            burgerIngredientsFailed: false,
            burgerIngredients: []
        }, {
            type: types.GET_BURGER_INGREDIENTS_SUCCESS,
            ingredients: [
                {
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
                },
                {
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
                }
            ]
        })).toEqual({
            burgerIngredientsRequest: false,
            burgerIngredientsFailed: false,
            burgerIngredients: [
                {
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
                },
                {
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
                }
            ]
        })
    });

    it('should handle GET_BURGER_INGREDIENTS_FAILED', function () {
        expect(reducer({
            burgerIngredientsRequest: true,
            burgerIngredientsFailed: false,
            burgerIngredients: []
        }, {
            type: types.GET_BURGER_INGREDIENTS_FAILED
        })).toEqual({
            burgerIngredientsRequest: false,
            burgerIngredientsFailed: true,
            burgerIngredients: []
        })
    });

    it('should handle ADD_BURGER_INGREDIENT_COUNT', function () {
        expect(reducer({
            burgerIngredientsRequest: false,
            burgerIngredientsFailed: false,
            burgerIngredients: [
                {
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
                },
                {
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
                }
            ]
        }, {
            type: types.ADD_BURGER_INGREDIENT_COUNT,
            id: '643d69a5c3f7b9001cfa0941'
        })).toEqual({
            burgerIngredientsRequest: false,
            burgerIngredientsFailed: false,
            burgerIngredients: [
                {
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
                },
                {
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
                    count: 1,
                    id: "643d69a5c3f7b9001cfa0941",
                }
            ]
        })
    });

    it('should handle REMOVE_BURGER_INGREDIENT_COUNT', function () {
        expect(reducer({
            burgerIngredientsRequest: false,
            burgerIngredientsFailed: false,
            burgerIngredients: [
                {
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
                },
                {
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
                    count: 1,
                    id: "643d69a5c3f7b9001cfa0941",
                }
            ]
        }, {
            type: types.REMOVE_BURGER_INGREDIENT_COUNT,
            id: '643d69a5c3f7b9001cfa0941'
        })).toEqual({
            burgerIngredientsRequest: false,
            burgerIngredientsFailed: false,
            burgerIngredients: [
                {
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
                },
                {
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
                }
            ]
        })
    });

    it('should handle SET_BURGER_INGREDIENTS_COUNT_ZERO', function () {
        expect(reducer({
            burgerIngredientsRequest: false,
            burgerIngredientsFailed: false,
            burgerIngredients: [
                {
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
                    count: 1,
                    id: "643d69a5c3f7b9001cfa093c",
                },
                {
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
                    count: 3,
                    id: "643d69a5c3f7b9001cfa0941",
                }
            ]
        }, {
            type: types.SET_BURGER_INGREDIENTS_COUNT_ZERO
        })).toEqual({
            burgerIngredientsRequest: false,
            burgerIngredientsFailed: false,
            burgerIngredients: [
                {
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
                },
                {
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
                }
            ]
        })
    });
})