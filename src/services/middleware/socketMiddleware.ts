import type {Middleware, MiddlewareAPI} from "redux";
import type {TApplicationActions, AppDispatch, RootState, TWSStoreActions} from "../types";
import {ACCESS_TOKEN} from "../../constants/constants";

export const socketMiddleware = (wsUrl: string, wsActions: TWSStoreActions, auth: boolean = false): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action: TApplicationActions) => {
            const {dispatch} = store;
            const {type} = action;
            const {wsInit, wsSendMessage, onOpen, onClose, onError, onMessage} = wsActions;
            const token = auth ? localStorage.getItem(ACCESS_TOKEN) : null;
            if (type === wsInit) {
                socket = token ? new WebSocket(`${wsUrl}?token=${token.split(' ')[1]}`) : new WebSocket(wsUrl);
            }

            if (socket) {

                socket.onopen = event => {
                    dispatch({ type: onOpen, payload: event });
                };

                socket.onerror = event => {
                    dispatch({ type: onError, payload: event });
                };

                socket.onmessage = event => {
                    const {data} = event;
                    dispatch({ type: onMessage, payload: JSON.parse(data) });
                };

                socket.onclose = event => {
                    dispatch({ type: onClose, payload: event });
                };

                if (type === wsSendMessage) {
                    socket.send(JSON.stringify('test'));
                }
            }

            next(action);
        };
    }) as Middleware;
};
