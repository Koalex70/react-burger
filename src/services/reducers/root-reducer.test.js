import reducer from './root-reducer';
import * as types from '../actions/ws-action-types';
import {initialState} from "./root-reducer";
import {MESSAGE_WS} from "../../constants/constants";

describe('ws reducer', () => {

    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState)
    });

    it('should handle WS_CONNECTION_SUCCESS', function () {
        expect(reducer(initialState, {
            type: types.WS_CONNECTION_SUCCESS
        })).toEqual({
            ...initialState,
            wsConnected: true,
        })
    });

    it('should handle WS_CONNECTION_CLOSED', function () {
        expect(reducer({
            ...initialState,
            wsConnected: true,
        }, {
            type: types.WS_CONNECTION_CLOSED
        })).toEqual(initialState)
    });

    it('should handle WS_CONNECTION_ERROR', function () {
        expect(reducer(initialState, {
            type: types.WS_CONNECTION_ERROR,
            payload: new Error('что-то сломалось')
        })).toEqual({
            ...initialState,
            error: new Error('что-то сломалось')
        })
    });

    it('should handle WS_GET_MESSAGE', function () {
        expect(reducer({
            wsConnected: true,
            message: null
        }, {
            type: types.WS_GET_MESSAGE,
            payload: MESSAGE_WS
        })).toEqual({
            wsConnected: true,
            message: MESSAGE_WS
        })
    });
});