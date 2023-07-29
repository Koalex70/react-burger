import reducer from './forgot-password';
import * as types from '../actions/forgot-password';
import {initialState} from "./forgot-password";

describe('forgot password reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState
        )
    });

    it('should handle POST_FORGOT_PASSWORD_REQUEST', function () {
        expect(reducer(initialState, {
            type: types.POST_FORGOT_PASSWORD_REQUEST
        })).toEqual({
            ...initialState,
            forgotPasswordRequest: true,
        })
    });

    it('should handle POST_FORGOT_PASSWORD_SUCCESS', function () {
        expect(reducer({
            ...initialState,
            forgotPasswordRequest: true,
        }, {
            type: types.POST_FORGOT_PASSWORD_SUCCESS
        })).toEqual({
            ...initialState,
            forgotPasswordSuccess: true,
        })
    });

    it('should handle POST_FORGOT_PASSWORD_FAILED', function () {
        expect(reducer({
            ...initialState,
            forgotPasswordRequest: true,
        }, {
            type: types.POST_FORGOT_PASSWORD_FAILED
        })).toEqual({
            ...initialState,
            forgotPasswordFailed: true,
        })
    });

    it('should handle SET_FORGOT_PASSWORD_INITIAL_STATE', function () {
        expect(reducer({
            ...initialState,
            forgotPasswordSuccess: true,
        }, {
            type: types.SET_FORGOT_PASSWORD_INITIAL_STATE
        })).toEqual(initialState)
    });
})