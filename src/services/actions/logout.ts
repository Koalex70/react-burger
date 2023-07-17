import {request} from "../../utils/api";
import {API_LOGOUT_ENDPOINT, REFRESH_TOKEN} from "../../constants/constants";
import {SET_USER_DATA_INITIAL_STATE} from "./user-data";
import {AppDispatch} from "../types";

export const logout = () => {
    return function (dispatch: AppDispatch) {
        request(API_LOGOUT_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                token: localStorage.getItem(REFRESH_TOKEN)
            })
        }).then(() => {
            dispatch({
                type: SET_USER_DATA_INITIAL_STATE
            });
            localStorage.clear();
        })
    }
}