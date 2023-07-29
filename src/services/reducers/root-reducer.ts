import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    TWSActions
} from "../actions/ws-action-types";
import {TMessage} from "../types";

export type TWSState = {
    wsConnected: boolean;
    message: TMessage | null;

    error?: Event;
}

export const initialState = {
    wsConnected: false,
    message: null
};

export const wsReducer = (state: TWSState = initialState, action: TWSActions):TWSState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };
        case WS_CONNECTION_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };
        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                error: undefined,
                wsConnected: false
            };
        case WS_GET_MESSAGE:
            return {
                ...state,
                error: undefined,
                message: action.payload
            };
        default:
            return state;
    }
};

export default wsReducer;