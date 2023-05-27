import {
    POST_ORDER_DETAILS_REQUEST,
    POST_ORDER_DETAILS_FAILED,
    POST_ORDER_DETAILS_SUCCESS,
    DELETE_ORDER_DETAILS,
} from "../actions/order-details";

const initialState = {
    orderDetailsRequest: false,
    orderDetailsFailed: false,
    orderDetails: null
}

export const orderDetailsReducer = (state = initialState, action) => {
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