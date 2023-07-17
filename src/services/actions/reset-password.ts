import {API_RESET_PASSWORD_ENDPOINT} from "../../constants/constants";
import {request} from "../../utils/api";
import {TResetPasswordState} from "../reducers/reset-password";
import {AppDispatch} from "../types";

export const POST_RESET_PASSWORD_REQUEST: 'POST_RESET_PASSWORD_REQUEST' = 'POST_RESET_PASSWORD_REQUEST';
export const POST_RESET_PASSWORD_SUCCESS: 'POST_RESET_PASSWORD_SUCCESS' = 'POST_RESET_PASSWORD_SUCCESS';
export const POST_RESET_PASSWORD_FAILED: 'POST_RESET_PASSWORD_FAILED' = 'POST_RESET_PASSWORD_FAILED';
export const SET_RESET_PASSWORD_INITIAL_STATE: 'SET_RESET_PASSWORD_INITIAL_STATE' = 'SET_RESET_PASSWORD_INITIAL_STATE';

export interface IPostResetPasswordRequest {
    readonly type: typeof POST_RESET_PASSWORD_REQUEST;
}

export interface IPostResetPasswordSuccess {
    readonly type: typeof POST_RESET_PASSWORD_SUCCESS;
}

export interface IPostResetPasswordFailed {
    readonly type: typeof POST_RESET_PASSWORD_FAILED;
}

export interface ISetResetPasswordInitialState {
    readonly type: typeof SET_RESET_PASSWORD_INITIAL_STATE;
}

export type TResetPasswordActions =
    | IPostResetPasswordRequest
    | IPostResetPasswordSuccess
    | IPostResetPasswordFailed
    | ISetResetPasswordInitialState;

export const postResetPassword = (userData: { token: string, password: string }) => {
    return function (dispatch: AppDispatch) {
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

export function getResetPasswordState(state: { resetPassword: TResetPasswordState; }): TResetPasswordState {
    return state.resetPassword;
}