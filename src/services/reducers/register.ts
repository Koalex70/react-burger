import {
    POST_REGISTER_REQUEST,
    POST_REGISTER_SUCCESS,
    POST_REGISTER_FAILED,
    SET_REGISTER_INITIAL_STATE,
    TRegisterActions
} from "../actions/register";
import {setTokens} from "../../utils/localStorage";

export type TRegisterState = {
    registerRequest: boolean;
    registerFailed: boolean;
    registerSuccess: boolean;
}

const initialState: TRegisterState = {
    registerRequest: false,
    registerFailed: false,
    registerSuccess: false,
}

export const registerReducer = (state = initialState, action: TRegisterActions): TRegisterState => {
    switch (action.type) {
        case POST_REGISTER_REQUEST: {
            return {
                ...state,
                registerRequest: true,
            };
        }
        case POST_REGISTER_SUCCESS: {
            const {accessToken, refreshToken} = action.payload;
            setTokens(accessToken, refreshToken);

            return {
                ...state,
                registerRequest: false,
                registerSuccess: true
            }
        }
        case POST_REGISTER_FAILED: {
            return {
                ...state,
                registerRequest: false,
                registerFailed: true
            }
        }
        case SET_REGISTER_INITIAL_STATE: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export default registerReducer;