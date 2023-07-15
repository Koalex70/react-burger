import {API_USER_DATA_ENDPOINT} from "../../constants/constants";
import {requestWithRefresh} from "../../utils/api";
import {AppDispatch, TUserData, TUserDataWithPassword} from "../types";
import {TUserDataState} from "../reducers/user-data";

export const GET_USER_DATA_REQUEST: 'GET_USER_DATA_REQUEST' = 'GET_USER_DATA_REQUEST';
export const GET_USER_DATA_SUCCESS: 'GET_USER_DATA_SUCCESS' = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILED: 'GET_USER_DATA_FAILED' = 'GET_USER_DATA_FAILED';
export const UPDATE_USER_DATA_REQUEST: 'UPDATE_USER_DATA_REQUEST' = 'UPDATE_USER_DATA_REQUEST';
export const UPDATE_USER_DATA_SUCCESS: 'UPDATE_USER_DATA_SUCCESS' = 'UPDATE_USER_DATA_SUCCESS';
export const UPDATE_USER_DATA_FAILED: 'UPDATE_USER_DATA_FAILED' = 'UPDATE_USER_DATA_FAILED';
export const SET_USER_DATA_INITIAL_STATE: 'SET_USER_DATA_INITIAL_STATE' = 'SET_USER_DATA_INITIAL_STATE';

export interface IGetUserDataRequest {
    readonly type: typeof GET_USER_DATA_REQUEST;
}

export interface IGetUserDataSuccess {
    readonly type: typeof GET_USER_DATA_SUCCESS;
    readonly payload: TUserData;
}

export interface IGetUserDataFailed {
    readonly type: typeof GET_USER_DATA_FAILED;
}

export interface IUpdateUserDataRequest {
    readonly type: typeof UPDATE_USER_DATA_REQUEST;
}

export interface IUpdateUserDataSuccess {
    readonly type: typeof UPDATE_USER_DATA_SUCCESS;
    readonly payload: TUserData;
}

export interface IUpdateUserDataFailed {
    readonly type: typeof UPDATE_USER_DATA_FAILED;
}

export interface ISetUserDataInitialState {
    readonly type: typeof SET_USER_DATA_INITIAL_STATE;
}

export type TUserDataActions =
    | IGetUserDataRequest
    | IGetUserDataSuccess
    | IGetUserDataFailed
    | IUpdateUserDataRequest
    | IUpdateUserDataSuccess
    | IUpdateUserDataFailed
    | ISetUserDataInitialState;

export function getUserData() {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_USER_DATA_REQUEST
        });

        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=utf-8');
        headers.set('Authorization', localStorage.getItem('token') as string);

        requestWithRefresh<{ user: TUserData }>(API_USER_DATA_ENDPOINT, {
            method: 'GET',
            headers: headers,
        })
            .then(data => {
                dispatch({
                    type: GET_USER_DATA_SUCCESS,
                    payload: data.user
                })
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: GET_USER_DATA_FAILED
                });
            });
    }
}

export function updateUserData(userData: TUserDataWithPassword) {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: UPDATE_USER_DATA_REQUEST
        });

        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=utf-8');
        headers.set('Authorization', localStorage.getItem('token') as string);

        requestWithRefresh<{ user: TUserData }>(API_USER_DATA_ENDPOINT, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(userData)
        })
            .then(data => {
                dispatch({
                    type: UPDATE_USER_DATA_SUCCESS,
                    payload: data.user
                });
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: UPDATE_USER_DATA_FAILED,
                });
            });
    }
}

export function getUserDataState(state: { userData: TUserDataState; }): TUserDataState {
    return state.userData;
}
