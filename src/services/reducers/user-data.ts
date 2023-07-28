import {
    GET_USER_DATA_REQUEST,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILED,
    SET_USER_DATA_INITIAL_STATE,
    UPDATE_USER_DATA_REQUEST,
    UPDATE_USER_DATA_SUCCESS,
    UPDATE_USER_DATA_FAILED, TUserDataActions,
} from "../actions/user-data";
import {TUserData} from "../types";

export type TUserDataState = {
    userDataRequest: boolean;
    userDataSuccess: boolean;
    userDataFailed: boolean;
    updateUserDataRequest: boolean;
    updateUserDataSuccess: boolean;
    updateUserDataFailed: boolean;
    userData: TUserData | null;
}

const initialState: TUserDataState = {
    userDataRequest: false,
    userDataSuccess: false,
    userDataFailed: false,
    updateUserDataRequest: false,
    updateUserDataSuccess: false,
    updateUserDataFailed: false,
    userData: null,
}

export const userDataReducer = (state = initialState, action: TUserDataActions): TUserDataState => {
    switch (action.type) {
        case GET_USER_DATA_REQUEST: {
            return {
                ...state,
                userDataRequest: true,
            }
        }
        case GET_USER_DATA_SUCCESS: {
            return {
                ...state,
                userDataRequest: false,
                userDataSuccess: true,
                userData: action.payload
            }
        }
        case GET_USER_DATA_FAILED: {
            return {
                ...state,
                userDataRequest: false,
                userDataFailed: true,
            }
        }
        case UPDATE_USER_DATA_REQUEST: {
            return {
                ...state,
                updateUserDataRequest: true
            }
        }
        case UPDATE_USER_DATA_SUCCESS: {
            return {
                ...state,
                updateUserDataRequest: false,
                updateUserDataSuccess: true,
                userData: action.payload,
            }
        }
        case UPDATE_USER_DATA_FAILED: {
            return {
                ...state,
                updateUserDataRequest: false,
                updateUserDataFailed: true
            }
        }
        case SET_USER_DATA_INITIAL_STATE: {
            return initialState
        }
        default: {
            return state
        }
    }
}

export default userDataReducer;