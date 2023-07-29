import reducer from './user-data';
import * as types from '../actions/user-data';
import {initialState} from "./user-data";

describe('user data reducer', () => {

    const userData = {
        email: "mageramovka@yandex.rure",
        name: "mageramovKA"
    }

    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState)
    });

    it('should handle GET_USER_DATA_REQUEST', function () {
        expect(reducer(initialState, {
            type: types.GET_USER_DATA_REQUEST
        })).toEqual({
            ...initialState,
            userDataRequest: true,
        })
    });

    it('should handle GET_USER_DATA_SUCCESS', function () {
        expect(reducer({
            ...initialState,
            userDataRequest: true,
        }, {
            type: types.GET_USER_DATA_SUCCESS,
            payload: userData
        })).toEqual({
            ...initialState,
            userDataSuccess: true,
            userData: userData,
        })
    });

    it('should handle GET_USER_DATA_FAILED', function () {
        expect(reducer({
            ...initialState,
            userDataRequest: true,
        }, {
            type: types.GET_USER_DATA_FAILED
        })).toEqual({
            ...initialState,
            userDataFailed: true,
        })
    });

    it('should handle UPDATE_USER_DATA_REQUEST', function () {
        expect(reducer(initialState, {
            type: types.UPDATE_USER_DATA_REQUEST
        })).toEqual({
            ...initialState,
            updateUserDataRequest: true,
        })
    });

    it('should handle UPDATE_USER_DATA_SUCCESS', function () {
        expect(reducer({
            ...initialState,
            updateUserDataRequest: true,
        }, {
            type: types.UPDATE_USER_DATA_SUCCESS,
            payload: userData
        })).toEqual({
            ...initialState,
            updateUserDataSuccess: true,
            userData: userData,
        })
    });

    it('should handle UPDATE_USER_DATA_FAILED', function () {
        expect(reducer({
            ...initialState,
            updateUserDataRequest: true,
        }, {
            type: types.UPDATE_USER_DATA_FAILED,
        })).toEqual({
            ...initialState,
            updateUserDataFailed: true,
        })
    });

    it('should handle SET_USER_DATA_INITIAL_STATE', function () {
        expect(reducer({
            ...initialState,
            updateUserDataSuccess: true,
            userData: userData,
        }, {
            type: types.SET_USER_DATA_INITIAL_STATE
        })).toEqual(initialState)
    });


})