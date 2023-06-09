import {
    POST_RESET_PASSWORD_REQUEST,
    POST_RESET_PASSWORD_SUCCESS,
    POST_RESET_PASSWORD_FAILED,
    SET_RESET_PASSWORD_INITIAL_STATE
} from "../actions/reset-password";

const initialState = {
    resetPasswordRequest: false,
    resetPasswordSuccess: false,
    resetPasswordFailed: false,
};

export const resetPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                resetPasswordRequest: true,
            }
        }
        case POST_RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                resetPasswordSuccess: true,
                resetPasswordRequest: false,
            }
        }
        case POST_RESET_PASSWORD_FAILED: {
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordFailed: true
            }
        }
        case SET_RESET_PASSWORD_INITIAL_STATE: {
            return initialState
        }
        default:
            return state;
    }
}