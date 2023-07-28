import React from "react";
import {store} from "../../index";
import {TBurgerConstructorActions} from "../actions/burger-constructor";
import {TBurgerIngredientsActions} from "../actions/burger-ingredients";
import {TForgotPasswordActions} from "../actions/forgot-password";
import {TLoginActions} from "../actions/login";
import {TOrderDetailsActions} from "../actions/order-details";
import {TRegisterActions} from "../actions/register";
import {TResetPasswordActions} from "../actions/reset-password";
import {TUserDataActions} from "../actions/user-data";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {
    TWSActions,
    WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS, WS_GET_MESSAGE,
    WS_SEND_MESSAGE
} from "../actions/ws-action-types";
import {
    TWSAuthActions, WS_CONNECTION_CLOSED_AUTH, WS_CONNECTION_ERROR_AUTH,
    WS_CONNECTION_START_AUTH,
    WS_CONNECTION_SUCCESS_AUTH, WS_GET_MESSAGE_AUTH,
    WS_SEND_MESSAGE_AUTH
} from "../actions/ws-auth-action-types";

export type TBurgerIngredientsCounter = {
    count: number;
    type: string
}

export type TBurgerIngredientsElement = {
    id: string;
    image: string;
    name: string;
    type: string;
    price: number;
    count: number;
    image_mobile: string;
}

export type TBurgerIngredientsList = {
    id: string;
    image: string;
    name: string;
    type: string;
    price: number;
    count: number;
    image_mobile: string;
}

export type TBurgerConstructorElement = {
    ingredient: TBurgerConstructorElementIngredient,
    index: number,
    moveCard: (dragIndex: number, hoverIndex: number) => void
}

export type TButtonWithPrice = {
    price: number
}

export type TModal = {
    onClose: () => void;
    title?: string;
    children: React.ReactNode
}

export type TModalOverlay = {
    onClose: () => void;
}

export type TPasswordInput = {
    placeholder: string,
    value: string,
    onChange: () => void
}

export type TProfileTabs = {
    activeTab: string
}

export type TProtectedRouteElement = {
    element: React.ReactNode,
    isAuthRequire: boolean
}

export type TBurgerConstructorBun = {
    id: string;
    image: string;
    name: string;
    type: string;
    price: number;
    count: number;
    image_mobile: string;
}
export type TBurgerConstructorIngredient = {
    id: string;
    image?: string;
    name: string;
    type?: string;
    price: number;
    count?: number;
    image_mobile: string;
    uuid: string
}

export type TBurgerIngredient = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    count: number;
    id: string;
    __v?: number;
}

export type TBurgerConstructorElementIngredient = {
    id: string;
    uuid: string;
    name: string;
    image_mobile: string;
    price: number;
}

export type TOrderDetails = {
    name: string;
    number: number;
}

export type TOrderDetailsResponse = {
    name: string;
    order: {
        number: number;
    }
}

export type TTokens = {
    readonly accessToken: string;
    readonly refreshToken: string;
}

export type TUserData = {
    readonly name: string;
    readonly email: string;
}

export type TUserDataWithPassword = {
    name?: string;
    email?: string;
    password?: string;
}

export type TOrderListItem = {
    number: number;
    name: string;
    createdAt: string;
    ingredients: string[];
    _id?: string;
    status: string;
    updatedAt: string;
}

export interface TOrder {
    ingredients: Array<string>;
    _id: string;
    status: string;
    number: number;
    createdAt: string;
    updatedAt: string;
    name: string;
}

export type TMessage = {
    total: number;
    totalToday: number;
    orders: Array<TOrder>;
}

export type TWSStoreActions = {
    wsInit: typeof  WS_CONNECTION_START,
    wsSendMessage: typeof  WS_SEND_MESSAGE,
    onOpen: typeof  WS_CONNECTION_SUCCESS,
    onClose: typeof WS_CONNECTION_CLOSED,
    onError: typeof  WS_CONNECTION_ERROR,
    onMessage: typeof  WS_GET_MESSAGE,
} | {
    wsInit: typeof  WS_CONNECTION_START_AUTH,
    wsSendMessage: typeof  WS_SEND_MESSAGE_AUTH,
    onOpen: typeof  WS_CONNECTION_SUCCESS_AUTH,
    onClose: typeof WS_CONNECTION_CLOSED_AUTH,
    onError: typeof  WS_CONNECTION_ERROR_AUTH,
    onMessage: typeof  WS_GET_MESSAGE_AUTH,
};

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
    | TBurgerConstructorActions
    | TBurgerIngredientsActions
    | TForgotPasswordActions
    | TLoginActions
    | TOrderDetailsActions
    | TRegisterActions
    | TResetPasswordActions
    | TUserDataActions
    | TWSActions
    | TWSAuthActions;

export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;
