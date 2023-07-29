import reducer from './root-auth-reducer';
import * as types from '../actions/ws-auth-action-types'
import {initialState} from "./root-auth-reducer";
import {MESSAGE_WS} from "../../constants/constants";

describe('ws auth reducer', () => {

    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState)
    });

    it('should handle WS_CONNECTION_SUCCESS_AUTH', function () {
        expect(reducer(initialState, {
            type: types.WS_CONNECTION_SUCCESS_AUTH
        })).toEqual({
            ...initialState,
            wsConnected: true,
        })
    });

    it('should handle WS_CONNECTION_CLOSED_AUTH', function () {
        expect(reducer({
            ...initialState,
            wsConnected: true,
        }, {
            type: types.WS_CONNECTION_CLOSED_AUTH
        })).toEqual(initialState)
    });

    it('should handle WS_CONNECTION_ERROR_AUTH', function () {
        expect(reducer(initialState, {
            type: types.WS_CONNECTION_ERROR_AUTH,
            payload: new Error('Что-то сломалось')
        })).toEqual({
            ...initialState,
            error: new Error('Что-то сломалось')
        })
    });

    it('should handle WS_GET_MESSAGE_AUTH', function () {
        expect(reducer({
            ...initialState,
            wsConnected: true,
        }, {
            type: types.WS_GET_MESSAGE_AUTH,
            payload: MESSAGE_WS
        })).toEqual({
            wsConnected: true,
            message: MESSAGE_WS,
        })
    });

})