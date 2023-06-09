import {API_RESET_PASSWORD_ENDPOINT} from "../../constants/constants";
import {request} from "../../utils/api";

export const POST_RESET_PASSWORD_REQUEST = 'POST_RESET_PASSWORD_REQUEST';
export const POST_RESET_PASSWORD_SUCCESS = 'POST_RESET_PASSWORD_SUCCESS';
export const POST_RESET_PASSWORD_FAILED = 'POST_RESET_PASSWORD_FAILED';
export const SET_RESET_PASSWORD_INITIAL_STATE = 'SET_RESET_PASSWORD_INITIAL_STATE';

export const postResetPassword = (userData) => {
    return function (dispatch) {
        dispatch({
            type: POST_RESET_PASSWORD_REQUEST
        });
        request(API_RESET_PASSWORD_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(userData)
        })
            .then(() => {
                dispatch({
                    type: POST_RESET_PASSWORD_SUCCESS
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: POST_RESET_PASSWORD_FAILED
                });
            })
    }
}