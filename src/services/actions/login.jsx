import {API_LOGIN_ENDPOINT} from "../../constants/constants";
import {request} from "../../utils/api";

export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILED = 'POST_LOGIN_FAILED';
export const SET_LOGIN_INITIAL_STATE = 'SET_LOGIN_INITIAL_STATE';

export const postLogin = (userData) => {
    return function (dispatch) {
        dispatch({
            type: POST_LOGIN_REQUEST
        });
        request(API_LOGIN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(userData)
        })
            .then(payload => {
                dispatch({
                    type: POST_LOGIN_SUCCESS,
                    payload: payload
                });
            })
            .catch(err => {
                dispatch({
                    type: POST_LOGIN_FAILED
                });
                console.log(err);
            })
    }
}

export function getLoginState (state) {
    return state.login;
}
