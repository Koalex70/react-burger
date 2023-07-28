import reducer from './reset-password';
import * as types from '../actions/reset-password'
describe('reset password reducer', () => {

    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual({
            resetPasswordRequest: false,
            resetPasswordSuccess: false,
            resetPasswordFailed: false,
        })
    });

    it('should handle POST_RESET_PASSWORD_REQUEST', function () {
        expect(reducer({
            resetPasswordRequest: false,
            resetPasswordSuccess: false,
            resetPasswordFailed: false,
        }, {
            type: types.POST_RESET_PASSWORD_REQUEST
        })).toEqual({
            resetPasswordRequest: true,
            resetPasswordSuccess: false,
            resetPasswordFailed: false,
        })
    });

    it('should handle POST_RESET_PASSWORD_SUCCESS', function () {
        expect(reducer({
            resetPasswordRequest: true,
            resetPasswordSuccess: false,
            resetPasswordFailed: false,
        }, {
            type: types.POST_RESET_PASSWORD_SUCCESS
        })).toEqual({
            resetPasswordRequest: false,
            resetPasswordSuccess: true,
            resetPasswordFailed: false,
        })
    });

    it('should handle POST_RESET_PASSWORD_FAILED', function () {
        expect(reducer({
            resetPasswordRequest: true,
            resetPasswordSuccess: false,
            resetPasswordFailed: false,
        }, {
            type: types.POST_RESET_PASSWORD_FAILED
        })).toEqual({
            resetPasswordRequest: false,
            resetPasswordSuccess: false,
            resetPasswordFailed: true,
        })
    });

    it('should handle SET_RESET_PASSWORD_INITIAL_STATE', function () {
        expect(reducer({
            resetPasswordRequest: false,
            resetPasswordSuccess: true,
            resetPasswordFailed: false,
        }, {
            type: types.SET_RESET_PASSWORD_INITIAL_STATE
        })).toEqual({
            resetPasswordRequest: false,
            resetPasswordSuccess: false,
            resetPasswordFailed: false,
        })
    });

})