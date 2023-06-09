import {
    POST_FORGOT_PASSWORD_REQUEST,
    POST_FORGOT_PASSWORD_SUCCESS,
    POST_FORGOT_PASSWORD_FAILED, SET_FORGOT_PASSWORD_INITIAL_STATE
} from "../actions/forgot-password";

const initialState = {
    forgotPasswordRequest: false,
    forgotPasswordSuccess: false,
    forgotPasswordFailed: false,
};

export const forgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                forgotPasswordRequest: true,
            }
        }
        case POST_FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                forgotPasswordSuccess: true,
                forgotPasswordRequest: false,
            }
        }
        case POST_FORGOT_PASSWORD_FAILED: {
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordFailed: true
            }
        }
        case SET_FORGOT_PASSWORD_INITIAL_STATE: {
            return initialState
        }
        default:
            return state;
    }
}