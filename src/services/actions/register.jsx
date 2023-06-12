import {API_REGISTER_ENDPOINT} from "../../constants/constants";
import {request} from "../../utils/api";

export const POST_REGISTER_REQUEST = 'POST_REGISTER_REQUEST';
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS';
export const POST_REGISTER_FAILED = 'POST_REGISTER_FAILED';
export const SET_REGISTER_INITIAL_STATE = 'SET_REGISTER_INITIAL_STATE';

export const postRegister = (userData) => {
    return function (dispatch) {
        dispatch({
            type: POST_REGISTER_REQUEST
        });
        request(API_REGISTER_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(userData)
        })
            .then(payload => {
                dispatch({
                    type: POST_REGISTER_SUCCESS,
                    payload: payload
                });
            })
            .catch(err => {
                dispatch({
                    type: POST_REGISTER_FAILED
                });
                console.log(err);
            });
    }
}

export function getRegisterState(state) {
    return state.register;
}