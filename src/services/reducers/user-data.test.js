import reducer from './user-data';
import * as types from '../actions/user-data'

describe('user data reducer', () => {

    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual({
            userDataRequest: false,
            userDataSuccess: false,
            userDataFailed: false,
            updateUserDataRequest: false,
            updateUserDataSuccess: false,
            updateUserDataFailed: false,
            userData: null,
        })
    });

    it('should handle GET_USER_DATA_REQUEST', function () {
        expect(reducer({
            userDataRequest: false,
            userDataSuccess: false,
            userDataFailed: false,
            updateUserDataRequest: false,
            updateUserDataSuccess: false,
            updateUserDataFailed: false,
            userData: null,
        }, {
            type: types.GET_USER_DATA_REQUEST
        })).toEqual({
            userDataRequest: true,
            userDataSuccess: false,
            userDataFailed: false,
            updateUserDataRequest: false,
            updateUserDataSuccess: false,
            updateUserDataFailed: false,
            userData: null,
        })
    });

    it('should handle GET_USER_DATA_SUCCESS', function () {
        expect(reducer({
            userDataRequest: true,
            userDataSuccess: false,
            userDataFailed: false,
            updateUserDataRequest: false,
            updateUserDataSuccess: false,
            updateUserDataFailed: false,
            userData: null,
        }, {
            type: types.GET_USER_DATA_SUCCESS,
            payload: {
                email: "mageramovka@yandex.rure",
                name: "mageramovKA"
            }
        })).toEqual({
            userDataRequest: false,
            userDataSuccess: true,
            userDataFailed: false,
            updateUserDataRequest: false,
            updateUserDataSuccess: false,
            updateUserDataFailed: false,
            userData: {
                email: "mageramovka@yandex.rure",
                name: "mageramovKA"
            },
        })
    });

    it('should handle GET_USER_DATA_FAILED', function () {
        expect(reducer({
            userDataRequest: true,
            userDataSuccess: false,
            userDataFailed: false,
            updateUserDataRequest: false,
            updateUserDataSuccess: false,
            updateUserDataFailed: false,
            userData: null,
        }, {
            type: types.GET_USER_DATA_FAILED
        })).toEqual({
            userDataRequest: false,
            userDataSuccess: false,
            userDataFailed: true,
            updateUserDataRequest: false,
            updateUserDataSuccess: false,
            updateUserDataFailed: false,
            userData: null,
        })
    });

    it('should handle UPDATE_USER_DATA_REQUEST', function () {
        expect(reducer({
            userDataRequest: false,
            userDataSuccess: false,
            userDataFailed: false,
            updateUserDataRequest: false,
            updateUserDataSuccess: false,
            updateUserDataFailed: false,
            userData: null,
        }, {
            type: types.UPDATE_USER_DATA_REQUEST
        })).toEqual({
            userDataRequest: false,
            userDataSuccess: false,
            userDataFailed: false,
            updateUserDataRequest: true,
            updateUserDataSuccess: false,
            updateUserDataFailed: false,
            userData: null,
        })
    });

    it('should handle UPDATE_USER_DATA_SUCCESS', function () {
        expect(reducer({
            userDataRequest: false,
            userDataSuccess: false,
            userDataFailed: false,
            updateUserDataRequest: true,
            updateUserDataSuccess: false,
            updateUserDataFailed: false,
            userData: null,
        }, {
            type: types.UPDATE_USER_DATA_SUCCESS,
            payload: {
                email: "mageramovka@yandex.rure",
                name: "mageramovKA"
            }
        })).toEqual({
            userDataRequest: false,
            userDataSuccess: false,
            userDataFailed: false,
            updateUserDataRequest: false,
            updateUserDataSuccess: true,
            updateUserDataFailed: false,
            userData: {
                email: "mageramovka@yandex.rure",
                name: "mageramovKA"
            },
        })
    });

    it('should handle UPDATE_USER_DATA_FAILED', function () {
        expect(reducer({
            userDataRequest: false,
            userDataSuccess: false,
            userDataFailed: false,
            updateUserDataRequest: true,
            updateUserDataSuccess: false,
            updateUserDataFailed: false,
            userData: null,
        }, {
            type: types.UPDATE_USER_DATA_FAILED,
        })).toEqual({
            userDataRequest: false,
            userDataSuccess: false,
            userDataFailed: false,
            updateUserDataRequest: false,
            updateUserDataSuccess: false,
            updateUserDataFailed: true,
            userData: null,
        })
    });

    it('should handle SET_USER_DATA_INITIAL_STATE', function () {
        expect(reducer({
            userDataRequest: false,
            userDataSuccess: false,
            userDataFailed: false,
            updateUserDataRequest: false,
            updateUserDataSuccess: true,
            updateUserDataFailed: false,
            userData: {
                email: "mageramovka@yandex.rure",
                name: "mageramovKA"
            },
        }, {
            type: types.SET_USER_DATA_INITIAL_STATE
        })).toEqual({
            userDataRequest: false,
            userDataSuccess: false,
            userDataFailed: false,
            updateUserDataRequest: false,
            updateUserDataSuccess: false,
            updateUserDataFailed: false,
            userData: null,
        })
    });


})