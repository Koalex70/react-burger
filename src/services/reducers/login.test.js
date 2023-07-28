import reducer from './login';
import * as types from '../actions/login';

describe('login reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            loginRequest: false,
            loginSuccess: false,
            loginFailed: false
        })
    });

    it('should handle POST_LOGIN_REQUEST', function () {
        expect(reducer({
            loginRequest: false,
            loginSuccess: false,
            loginFailed: false
        }, {
            type: types.POST_LOGIN_REQUEST
        })).toEqual({
            loginRequest: true,
            loginSuccess: false,
            loginFailed: false
        })
    });

    it('should handle POST_LOGIN_SUCCESS', function () {
        expect(reducer({
            loginRequest: true,
            loginSuccess: false,
            loginFailed: false
        }, {
            type: types.POST_LOGIN_SUCCESS,
            payload: {
                accessToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWQ0ZTZkOGE0YjYyMDAxYzg2MWI3ZCIsImlhdCI6MTY4OTYxMTc1MiwiZXhwIjoxNjg5NjEyOTUyfQ.IG891kzrvjRDLAwpmDrC5IQ2xA8nz8OA9ZJSKPXah1M',
                refreshToken: '2659067c97f302d3640e6c9b6f979e5e6fc5beeed3ace2568d1f1af99439a8b9a5aa1f01c4767153'
            }
        })).toEqual({
            loginRequest: false,
            loginSuccess: true,
            loginFailed: false
        })
    });

    it('should handle POST_LOGIN_FAILED', function () {
        expect(reducer({
            loginRequest: true,
            loginSuccess: false,
            loginFailed: false
        }, {
            type: types.POST_LOGIN_FAILED
        })).toEqual({
            loginRequest: false,
            loginSuccess: false,
            loginFailed: true
        })
    });

    it('should handle SET_LOGIN_INITIAL_STATE', function () {
        expect(reducer({
            loginRequest: false,
            loginSuccess: true,
            loginFailed: false
        }, {
            type: types.SET_LOGIN_INITIAL_STATE
        })).toEqual({
            loginRequest: false,
            loginSuccess: false,
            loginFailed: false
        })
    });
})