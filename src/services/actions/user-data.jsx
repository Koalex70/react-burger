import {API_USER_DATA_ENDPOINT} from "../../constants/constants";
import {requestWithRefresh} from "../../utils/api";

export const GET_USER_DATA_REQUEST = 'GET_USER_DATA_REQUEST';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILED = 'GET_USER_DATA_FAILED';
export const UPDATE_USER_DATA_REQUEST = 'UPDATE_USER_DATA_REQUEST';
export const UPDATE_USER_DATA_SUCCESS = 'UPDATE_USER_DATA_SUCCESS';
export const UPDATE_USER_DATA_FAILED = 'UPDATE_USER_DATA_FAILED';
export const SET_USER_DATA_INITIAL_STATE = 'SET_USER_DATA_INITIAL_STATE';

export function getUserData() {
    return function (dispatch) {
        dispatch({
            type: GET_USER_DATA_REQUEST
        });
        requestWithRefresh(API_USER_DATA_ENDPOINT, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token')
            },
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

export function updateUserData(userData) {
    return function (dispatch) {
        dispatch({
            type: UPDATE_USER_DATA_REQUEST
        });
        requestWithRefresh(API_USER_DATA_ENDPOINT, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token')
            },
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
