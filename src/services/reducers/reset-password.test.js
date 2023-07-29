import reducer from './reset-password';
import * as types from '../actions/reset-password'
import {initialState} from "./reset-password";

describe('reset password reducer', () => {

    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState)
    });

    it('should handle POST_RESET_PASSWORD_REQUEST', function () {
        expect(reducer(initialState, {
            type: types.POST_RESET_PASSWORD_REQUEST
        })).toEqual({
            ...initialState,
            resetPasswordRequest: true,
        })
    });

    it('should handle POST_RESET_PASSWORD_SUCCESS', function () {
        expect(reducer({
            ...initialState,
            resetPasswordRequest: true,
        }, {
            type: types.POST_RESET_PASSWORD_SUCCESS
        })).toEqual({
            ...initialState,
            resetPasswordSuccess: true,
        })
    });

    it('should handle POST_RESET_PASSWORD_FAILED', function () {
        expect(reducer({
            ...initialState,
            resetPasswordRequest: true,
        }, {
            type: types.POST_RESET_PASSWORD_FAILED
        })).toEqual({
            ...initialState,
            resetPasswordFailed: true,
        })
    });

    it('should handle SET_RESET_PASSWORD_INITIAL_STATE', function () {
        expect(reducer({
            ...initialState,
            resetPasswordSuccess: true,
        }, {
            type: types.SET_RESET_PASSWORD_INITIAL_STATE
        })).toEqual(initialState)
    });

})