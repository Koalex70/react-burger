import {API_LOGIN_ENDPOINT} from "../../constants/constants";
import {request} from "../../utils/api";
import {TLoginState} from "../reducers/login";
import {AppDispatch, TTokens} from "../types";

export const POST_LOGIN_REQUEST: 'POST_LOGIN_REQUEST' = 'POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS: 'POST_LOGIN_SUCCESS' = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILED: 'POST_LOGIN_FAILED' = 'POST_LOGIN_FAILED';
export const SET_LOGIN_INITIAL_STATE: 'SET_LOGIN_INITIAL_STATE' = 'SET_LOGIN_INITIAL_STATE';

export interface IPostLoginRequest {
    readonly type: typeof POST_LOGIN_REQUEST;
}

export interface IPostLoginSuccess {
    readonly type: typeof POST_LOGIN_SUCCESS;
    readonly payload: TTokens;
}

export interface IPostLoginFailed {
    readonly type: typeof POST_LOGIN_FAILED;
}

export interface ISetLoginInitialState {
    readonly type: typeof SET_LOGIN_INITIAL_STATE;
}

export type TLoginActions =
    | IPostLoginRequest
    | IPostLoginSuccess
    | IPostLoginFailed
    | ISetLoginInitialState;

export const postLogin = (userData: {email: string; password: string}) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: POST_LOGIN_REQUEST
        });
        request<TTokens>(API_LOGIN_ENDPOINT, {
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

export function getLoginState(state: { login: TLoginState; }): TLoginState {
    return state.login;
}
