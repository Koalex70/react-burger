import {API_FORGOT_PASSWORD_ENDPOINT} from "../../constants/constants";
import {request} from "../../utils/api";

export const POST_FORGOT_PASSWORD_REQUEST = 'POST_FORGOT_PASSWORD_REQUEST';
export const POST_FORGOT_PASSWORD_SUCCESS = 'POST_FORGOT_PASSWORD_SUCCESS';
export const POST_FORGOT_PASSWORD_FAILED = 'POST_FORGOT_PASSWORD_FAILED';
export const SET_FORGOT_PASSWORD_INITIAL_STATE = 'SET_FORGOT_PASSWORD_INITIAL_STATE';

export const postForgotPassword = (email) => {
    return function (dispatch) {
        dispatch({
            type: POST_FORGOT_PASSWORD_REQUEST
        });
        request(API_FORGOT_PASSWORD_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({'email': email})
        })
            .then(() => {
                dispatch({
                    type: POST_FORGOT_PASSWORD_SUCCESS
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: POST_FORGOT_PASSWORD_FAILED
                });
            })
    }
}