import {TMessage} from "../types";
import {
    TWSAuthActions,
    WS_CONNECTION_CLOSED_AUTH,
    WS_CONNECTION_ERROR_AUTH,
    WS_CONNECTION_SUCCESS_AUTH, WS_GET_MESSAGE_AUTH
} from "../actions/wsAuthActionTypes";

export type TWSAuthState = {
    wsConnected: boolean;
    message: TMessage | null;

    error?: Event;
}

const initialState = {
    wsConnected: false,
    message: null
};

export const wsAuthReducer = (state: TWSAuthState = initialState, action: TWSAuthActions):TWSAuthState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS_AUTH:
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };
        case WS_CONNECTION_ERROR_AUTH:
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };
        case WS_CONNECTION_CLOSED_AUTH:
            return {
                ...state,
                error: undefined,
                wsConnected: false
            };
        case WS_GET_MESSAGE_AUTH:
            return {
                ...state,
                error: undefined,
                message: action.payload
            };
        default:
            return state;
    }
};