import reducer from './forgot-password';
import * as types from '../actions/forgot-password';

describe('forgot password reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            forgotPasswordRequest: false,
            forgotPasswordSuccess: false,
            forgotPasswordFailed: false,
        })
    });

    it('should handle POST_FORGOT_PASSWORD_REQUEST', function () {
        expect(reducer({
            forgotPasswordRequest: false,
            forgotPasswordSuccess: false,
            forgotPasswordFailed: false,
        }, {
            type: types.POST_FORGOT_PASSWORD_REQUEST
        })).toEqual({
            forgotPasswordRequest: true,
            forgotPasswordSuccess: false,
            forgotPasswordFailed: false,
        })
    });

    it('should handle POST_FORGOT_PASSWORD_SUCCESS', function () {
        expect(reducer({
            forgotPasswordRequest: true,
            forgotPasswordSuccess: false,
            forgotPasswordFailed: false,
        }, {
            type: types.POST_FORGOT_PASSWORD_SUCCESS
        })).toEqual({
            forgotPasswordRequest: false,
            forgotPasswordSuccess: true,
            forgotPasswordFailed: false,
        })
    });

    it('should handle POST_FORGOT_PASSWORD_FAILED', function () {
        expect(reducer({
            forgotPasswordRequest: true,
            forgotPasswordSuccess: false,
            forgotPasswordFailed: false,
        }, {
            type: types.POST_FORGOT_PASSWORD_FAILED
        })).toEqual({
            forgotPasswordRequest: false,
            forgotPasswordSuccess: false,
            forgotPasswordFailed: true,
        })
    });

    it('should handle SET_FORGOT_PASSWORD_INITIAL_STATE', function () {
        expect(reducer({
            forgotPasswordRequest: false,
            forgotPasswordSuccess: true,
            forgotPasswordFailed: false,
        }, {
            type: types.SET_FORGOT_PASSWORD_INITIAL_STATE
        })).toEqual({
            forgotPasswordRequest: false,
            forgotPasswordSuccess: false,
            forgotPasswordFailed: false,
        })
    });
})