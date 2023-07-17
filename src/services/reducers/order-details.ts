import {
    POST_ORDER_DETAILS_REQUEST,
    POST_ORDER_DETAILS_FAILED,
    POST_ORDER_DETAILS_SUCCESS,
    DELETE_ORDER_DETAILS, TOrderDetailsActions,
} from "../actions/order-details";
import {TOrderDetails} from "../types";

export type TOrderDetailsState = {
    orderDetailsRequest: boolean;
    orderDetailsFailed: boolean;
    orderDetails: TOrderDetails | null;
}

const initialState: TOrderDetailsState = {
    orderDetailsRequest: false,
    orderDetailsFailed: false,
    orderDetails: null
}

export const orderDetailsReducer = (state = initialState, action: TOrderDetailsActions): TOrderDetailsState => {
    switch (action.type) {
        case POST_ORDER_DETAILS_REQUEST: {
            return {
                ...state,
                orderDetailsRequest: true,
                orderDetailsFailed: false,
            };
        }
        case POST_ORDER_DETAILS_SUCCESS: {
            return {
                ...state,
                orderDetails: action.details,
                orderDetailsRequest: false
            };
        }
        case POST_ORDER_DETAILS_FAILED: {
            return {
                ...state,
                orderDetailsFailed: true,
                orderDetailsRequest: false
            };
        }
        case DELETE_ORDER_DETAILS: {
            return {
                ...state,
                orderDetails: null
            }
        }
        default: {
            return state
        }
    }
}