import {TMessage} from "../types";
import {TWSAuthState} from "../reducers/root-auth-reducer";

export const WS_CONNECTION_START_AUTH: 'WS_CONNECTION_START_AUTH' = 'WS_CONNECTION_START_AUTH';
export const WS_CONNECTION_SUCCESS_AUTH: 'WS_CONNECTION_SUCCESS_AUTH' = 'WS_CONNECTION_SUCCESS_AUTH';
export const WS_CONNECTION_ERROR_AUTH: 'WS_CONNECTION_ERROR_AUTH' = 'WS_CONNECTION_ERROR_AUTH';
export const WS_CONNECTION_CLOSED_AUTH: 'WS_CONNECTION_CLOSED_AUTH' = 'WS_CONNECTION_CLOSED_AUTH';
export const WS_GET_MESSAGE_AUTH: 'WS_GET_MESSAGE_AUTH' = 'WS_GET_MESSAGE_AUTH';
export const WS_SEND_MESSAGE_AUTH: 'WS_SEND_MESSAGE_AUTH' = 'WS_SEND_MESSAGE_AUTH';

export interface IWSAuthConnectionStart {
    readonly type: typeof WS_CONNECTION_START_AUTH;
}

export interface IWSAuthConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS_AUTH;
}

export interface IWSAuthConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR_AUTH;
    readonly payload: Event;
}

export interface IWSAuthConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED_AUTH;
}

export interface IWSAuthGetMessageAction {
    readonly type: typeof WS_GET_MESSAGE_AUTH;
    readonly payload: TMessage;
}

export interface IWSAuthSendMessageAction {
    readonly type: typeof WS_SEND_MESSAGE_AUTH;
    readonly payload: { message: string };
}

export type TWSAuthActions =
    | IWSAuthConnectionStart
    | IWSAuthConnectionSuccessAction
    | IWSAuthConnectionErrorAction
    | IWSAuthConnectionClosedAction
    | IWSAuthGetMessageAction
    | IWSAuthSendMessageAction;

export function getWSAuthState(state: { wsAuth: TWSAuthState }): TWSAuthState {
    return state.wsAuth
}