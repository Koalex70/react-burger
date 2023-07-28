import reducer from './root-auth-reducer';
import * as types from '../actions/ws-auth-action-types'

describe('ws auth reducer', () => {

    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual({
            wsConnected: false,
            message: null
        })
    });

    it('should handle WS_CONNECTION_SUCCESS_AUTH', function () {
        expect(reducer({
            wsConnected: false,
            message: null
        }, {
            type: types.WS_CONNECTION_SUCCESS_AUTH
        })).toEqual({
            wsConnected: true,
            message: null,
        })
    });

    it('should handle WS_CONNECTION_CLOSED_AUTH', function () {
        expect(reducer({
            wsConnected: true,
            message: null
        }, {
            type: types.WS_CONNECTION_CLOSED_AUTH
        })).toEqual({
            wsConnected: false,
            message: null,
        })
    });

    it('should handle WS_CONNECTION_ERROR_AUTH', function () {
        expect(reducer({
            wsConnected: false,
            message: null
        }, {
            type: types.WS_CONNECTION_ERROR_AUTH,
            payload: new Error('Что-то сломалось')
        })).toEqual({
            wsConnected: false,
            message: null,
            error: new Error('Что-то сломалось')
        })
    });

    it('should handle WS_GET_MESSAGE_AUTH', function () {
        expect(reducer({
            wsConnected: true,
            message: null
        }, {
            type: types.WS_GET_MESSAGE_AUTH,
            payload: {
                success: true,
                total: 12856,
                totalToday: 95,
                orders: [
                    {
                        _id: "64b79ff982e277001bf90d3f",
                        status: "done",
                        name: "Space флюоресцентный spicy бургер",
                        createdAt: "2023-07-19T08:34:01.994Z",
                        updatedAt: "2023-07-19T08:34:02.144Z",
                        number: 13227,
                        ingredients: [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa0943",
                            "643d69a5c3f7b9001cfa0942"
                        ]
                    },
                    {
                        _id: "64b56de882e277001bf907ae",
                        status: "done",
                        name: "Флюоресцентный бургер",
                        createdAt: "2023-07-17T16:35:52.786Z",
                        updatedAt: "2023-07-17T16:35:52.919Z",
                        number: 13092,
                        ingredients: [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093d"
                        ]
                    }
                ]
            }
        })).toEqual({
            wsConnected: true,
            message: {
                success: true,
                total: 12856,
                totalToday: 95,
                orders: [
                    {
                        _id: "64b79ff982e277001bf90d3f",
                        status: "done",
                        name: "Space флюоресцентный spicy бургер",
                        createdAt: "2023-07-19T08:34:01.994Z",
                        updatedAt: "2023-07-19T08:34:02.144Z",
                        number: 13227,
                        ingredients: [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa0943",
                            "643d69a5c3f7b9001cfa0942"
                        ]
                    },
                    {
                        _id: "64b56de882e277001bf907ae",
                        status: "done",
                        name: "Флюоресцентный бургер",
                        createdAt: "2023-07-17T16:35:52.786Z",
                        updatedAt: "2023-07-17T16:35:52.919Z",
                        number: 13092,
                        ingredients: [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093d"
                        ]
                    }
                ]
            },
        })
    });


})