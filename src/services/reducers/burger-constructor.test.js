import reducer from "./burger-constructor";
import * as types from '../actions/burger-constructor';

describe('burger constructor reducer', () => {

        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(
                {
                    bun: null,
                    ingredients: []
                }
            )
        });

        it('should handle UPDATE_BURGER_CONSTRUCTOR_BUN', function () {
            expect(reducer({
                bun: null,
                ingredients: []
            }, {
                type: types.UPDATE_BURGER_CONSTRUCTOR_BUN,
                bun: {
                    id: "643d69a5c3f7b9001cfa093d",
                    image: "https://code.s3.yandex.net/react/code/bun-01.png",
                    name: "Флюоресцентная булка R2-D3",
                    type: "bun",
                    price: 988,
                    count: 0,
                    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                }
            })).toEqual({
                bun: {
                    id: "643d69a5c3f7b9001cfa093d",
                    image: "https://code.s3.yandex.net/react/code/bun-01.png",
                    name: "Флюоресцентная булка R2-D3",
                    type: "bun",
                    price: 988,
                    count: 0,
                    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                },
                ingredients: []
            })
        });

        it('should handle ADD_BURGER_CONSTRUCTOR_INGREDIENT', function () {
            expect(reducer({
                bun: null,
                ingredients: [
                    {
                        id: "643d69a5c3f7b9001cfa0943",
                        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                        name: "Соус фирменный Space Sauce",
                        type: "sauce",
                        price: 80,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                        uuid: "bb712e6c-e8e2-48ba-9ac1-21bab7b44326"
                    }
                ]
            }, {
                type: types.ADD_BURGER_CONSTRUCTOR_INGREDIENT,
                ingredient: {
                    id: "643d69a5c3f7b9001cfa093e",
                    image: "https://code.s3.yandex.net/react/code/meat-03.png",
                    name: "Филе Люминесцентного тетраодонтимформа",
                    type: "main",
                    price: 988,
                    count: 0,
                    image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                    uuid: "5d50c722-3a69-438c-b2bc-fce58a1e6f9f"
                }
            })).toEqual({
                bun: null,
                ingredients: [
                    {
                        id: "643d69a5c3f7b9001cfa0943",
                        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                        name: "Соус фирменный Space Sauce",
                        type: "sauce",
                        price: 80,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                        uuid: "bb712e6c-e8e2-48ba-9ac1-21bab7b44326"
                    },
                    {
                        id: "643d69a5c3f7b9001cfa093e",
                        image: "https://code.s3.yandex.net/react/code/meat-03.png",
                        name: "Филе Люминесцентного тетраодонтимформа",
                        type: "main",
                        price: 988,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                        uuid: "5d50c722-3a69-438c-b2bc-fce58a1e6f9f"
                    }
                ]
            })
        });

        it('should handle SET_BURGER_CONSTRUCTOR_INGREDIENTS', function () {
            expect(reducer({
                bun: null,
                ingredients: [
                    {
                        id: "643d69a5c3f7b9001cfa0943",
                        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                        name: "Соус фирменный Space Sauce",
                        type: "sauce",
                        price: 80,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                        uuid: "bb712e6c-e8e2-48ba-9ac1-21bab7b44326"
                    },
                    {
                        id: "643d69a5c3f7b9001cfa093e",
                        image: "https://code.s3.yandex.net/react/code/meat-03.png",
                        name: "Филе Люминесцентного тетраодонтимформа",
                        type: "main",
                        price: 988,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                        uuid: "5d50c722-3a69-438c-b2bc-fce58a1e6f9f"
                    }
                ]
            }, {
                type: types.SET_BURGER_CONSTRUCTOR_INGREDIENTS,
                ingredients: [
                    {
                        id: "643d69a5c3f7b9001cfa093e",
                        image: "https://code.s3.yandex.net/react/code/meat-03.png",
                        name: "Филе Люминесцентного тетраодонтимформа",
                        type: "main",
                        price: 988,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                        uuid: "5d50c722-3a69-438c-b2bc-fce58a1e6f9f"
                    },
                    {
                        id: "643d69a5c3f7b9001cfa0943",
                        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                        name: "Соус фирменный Space Sauce",
                        type: "sauce",
                        price: 80,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                        uuid: "bb712e6c-e8e2-48ba-9ac1-21bab7b44326"
                    }
                ]
            })).toEqual({
                bun: null,
                ingredients: [
                    {
                        id: "643d69a5c3f7b9001cfa093e",
                        image: "https://code.s3.yandex.net/react/code/meat-03.png",
                        name: "Филе Люминесцентного тетраодонтимформа",
                        type: "main",
                        price: 988,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                        uuid: "5d50c722-3a69-438c-b2bc-fce58a1e6f9f"
                    },
                    {
                        id: "643d69a5c3f7b9001cfa0943",
                        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                        name: "Соус фирменный Space Sauce",
                        type: "sauce",
                        price: 80,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                        uuid: "bb712e6c-e8e2-48ba-9ac1-21bab7b44326"
                    }
                ]
            })
        });

        it('should handle DELETE_BURGER_CONSTRUCTOR_INGREDIENT', function () {
            expect(reducer({
                bun: null,
                ingredients: [
                    {
                        id: "643d69a5c3f7b9001cfa093e",
                        image: "https://code.s3.yandex.net/react/code/meat-03.png",
                        name: "Филе Люминесцентного тетраодонтимформа",
                        type: "main",
                        price: 988,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                        uuid: "5d50c722-3a69-438c-b2bc-fce58a1e6f9f"
                    },
                    {
                        id: "643d69a5c3f7b9001cfa0943",
                        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                        name: "Соус фирменный Space Sauce",
                        type: "sauce",
                        price: 80,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                        uuid: "bb712e6c-e8e2-48ba-9ac1-21bab7b44326"
                    }
                ]
            }, {
                type: types.DELETE_BURGER_CONSTRUCTOR_INGREDIENT,
                uuid: "5d50c722-3a69-438c-b2bc-fce58a1e6f9f"
            })).toEqual({
                bun: null,
                ingredients: [
                    {
                        id: "643d69a5c3f7b9001cfa0943",
                        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                        name: "Соус фирменный Space Sauce",
                        type: "sauce",
                        price: 80,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                        uuid: "bb712e6c-e8e2-48ba-9ac1-21bab7b44326"
                    }
                ]
            })
        });

        it('should handle SET_BURGER_CONSTRUCTOR_INITIAL_STATE', function () {
            expect(reducer({
                bun: {
                    id: "643d69a5c3f7b9001cfa093d",
                    image: "https://code.s3.yandex.net/react/code/bun-01.png",
                    name: "Флюоресцентная булка R2-D3",
                    type: "bun",
                    price: 988,
                    count: 0,
                    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                },
                ingredients: [
                    {
                        id: "643d69a5c3f7b9001cfa093e",
                        image: "https://code.s3.yandex.net/react/code/meat-03.png",
                        name: "Филе Люминесцентного тетраодонтимформа",
                        type: "main",
                        price: 988,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                        uuid: "5d50c722-3a69-438c-b2bc-fce58a1e6f9f"
                    },
                    {
                        id: "643d69a5c3f7b9001cfa0943",
                        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                        name: "Соус фирменный Space Sauce",
                        type: "sauce",
                        price: 80,
                        count: 0,
                        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                        uuid: "bb712e6c-e8e2-48ba-9ac1-21bab7b44326"
                    }
                ]
            }, {
                type: types.SET_BURGER_CONSTRUCTOR_INITIAL_STATE
            })).toEqual({
                bun: null,
                ingredients: []
            })
        });
    }
)