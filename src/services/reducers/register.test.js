import reducer from './register';
import * as types from '../actions/register'
import {initialState} from "./register";

describe('register reducer', () => {

    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState)
    });

    it('should handle POST_REGISTER_REQUEST', function () {
        expect(reducer(initialState, {
            type: types.POST_REGISTER_REQUEST
        })).toEqual({
            ...initialState,
            registerRequest: true,
        })
    });

    it('should handle POST_REGISTER_SUCCESS', function () {
        expect(reducer({
            ...initialState,
            registerRequest: true,
        }, {
            type: types.POST_REGISTER_SUCCESS,
            payload: {
                accessToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWQ0ZTZkOGE0YjYyMDAxYzg2MWI3ZCIsImlhdCI6MTY4OTYxMTc1MiwiZXhwIjoxNjg5NjEyOTUyfQ.IG891kzrvjRDLAwpmDrC5IQ2xA8nz8OA9ZJSKPXah1M',
                refreshToken: '2659067c97f302d3640e6c9b6f979e5e6fc5beeed3ace2568d1f1af99439a8b9a5aa1f01c4767153'
            }
        })).toEqual({
            ...initialState,
            registerSuccess: true,
        })
    });

    it('should handle POST_REGISTER_FAILED', function () {
        expect(reducer({
            ...initialState,
            registerRequest: true,
        }, {
            type: types.POST_REGISTER_FAILED
        })).toEqual({
            ...initialState,
            registerFailed: true,
        })
    });

    it('should handle SET_REGISTER_INITIAL_STATE', function () {
        expect(reducer({
            ...initialState,
            registerSuccess: true,
        }, {
            type: types.SET_REGISTER_INITIAL_STATE
        })).toEqual(initialState)
    });

})