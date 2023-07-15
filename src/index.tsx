import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./app";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import {rootReducer} from "./services/reducers";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {socketMiddleware} from "./services/middleware/socketMiddleware";
import {TWSStoreActions} from "./services/types";
import {
    WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS, WS_GET_MESSAGE,
    WS_SEND_MESSAGE
} from "./services/actions/wsActionTypes";
import {
    WS_CONNECTION_CLOSED_AUTH, WS_CONNECTION_ERROR_AUTH,
    WS_CONNECTION_START_AUTH,
    WS_CONNECTION_SUCCESS_AUTH, WS_GET_MESSAGE_AUTH,
    WS_SEND_MESSAGE_AUTH
} from "./services/actions/wsAuthActionTypes";

const wsActions: TWSStoreActions = {
    wsInit: WS_CONNECTION_START,
    wsSendMessage: WS_SEND_MESSAGE,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_MESSAGE
};

const wsAuthActions: TWSStoreActions = {
    wsInit: WS_CONNECTION_START_AUTH,
    wsSendMessage: WS_SEND_MESSAGE_AUTH,
    onOpen: WS_CONNECTION_SUCCESS_AUTH,
    onClose: WS_CONNECTION_CLOSED_AUTH,
    onError: WS_CONNECTION_ERROR_AUTH,
    onMessage: WS_GET_MESSAGE_AUTH
}
export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            socketMiddleware('wss://norma.nomoreparties.space/orders/all', wsActions),
            socketMiddleware('wss://norma.nomoreparties.space/orders', wsAuthActions, true),
        )
    )
);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
