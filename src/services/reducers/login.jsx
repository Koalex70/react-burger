import {
    POST_LOGIN_REQUEST,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAILED, SET_LOGIN_INITIAL_STATE
} from "../actions/login";
import {setTokens} from "../../utils/localStorage";

const initialState = {
    loginRequest: false,
    loginSuccess: false,
    loginFailed: false
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_LOGIN_REQUEST: {
            return {
                ...state,
                loginRequest: true,
            }
        }
        case POST_LOGIN_SUCCESS: {

            const {accessToken, refreshToken} = action.payload;
            setTokens(accessToken, refreshToken);

            return {
                ...state,
                loginRequest: false,
                loginSuccess: true,
            }
        }
        case POST_LOGIN_FAILED: {
            return {
                ...state,
                loginFailed: true,
                loginRequest: false
            }
        }
        case SET_LOGIN_INITIAL_STATE: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}