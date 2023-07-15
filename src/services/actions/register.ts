import {API_REGISTER_ENDPOINT} from "../../constants/constants";
import {request} from "../../utils/api";
import {AppDispatch, TTokens, TUserData} from "../types";
import {TRegisterState} from "../reducers/register";

export const POST_REGISTER_REQUEST: 'POST_REGISTER_REQUEST' = 'POST_REGISTER_REQUEST';
export const POST_REGISTER_SUCCESS: 'POST_REGISTER_SUCCESS' = 'POST_REGISTER_SUCCESS';
export const POST_REGISTER_FAILED: 'POST_REGISTER_FAILED' = 'POST_REGISTER_FAILED';
export const SET_REGISTER_INITIAL_STATE: 'SET_REGISTER_INITIAL_STATE' = 'SET_REGISTER_INITIAL_STATE';

export interface IPostRegisterRequest {
    readonly type: typeof POST_REGISTER_REQUEST;
}

export interface IPostRegisterSuccess {
    readonly type: typeof POST_REGISTER_SUCCESS;
    readonly payload: TTokens;
}

export interface IPostRegisterFailed {
    readonly type: typeof POST_REGISTER_FAILED;
}

export interface ISetRegisterInitialState {
    readonly type: typeof SET_REGISTER_INITIAL_STATE;
}

export type TRegisterActions =
    | IPostRegisterRequest
    | IPostRegisterSuccess
    | IPostRegisterFailed
    | ISetRegisterInitialState;

export const postRegister = (userData: TUserData & {password: string}) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: POST_REGISTER_REQUEST
        });
        request<TTokens>(API_REGISTER_ENDPOINT, {
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

export function getRegisterState(state: { register: TRegisterState; }): TRegisterState {
    return state.register;
}