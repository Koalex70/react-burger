import reducer from './order-details';
import * as types from '../actions/order-details'
import {initialState} from "./order-details";

describe('order details reducer', () => {

    const details = {
        name: "Space флюоресцентный spicy бургер",
        number: 13227,
    }

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    });

    it('should handle POST_ORDER_DETAILS_REQUEST', function () {
        expect(reducer(initialState, {
            type: types.POST_ORDER_DETAILS_REQUEST
        })).toEqual({
            ...initialState,
            orderDetailsRequest: true,
        })
    });

    it('should handle POST_ORDER_DETAILS_FAILED', function () {
        expect(reducer({
            ...initialState,
            orderDetailsRequest: true,
        }, {
            type: types.POST_ORDER_DETAILS_FAILED
        })).toEqual({
            ...initialState,
            orderDetailsFailed: true,
        })
    });

    it('should handle POST_ORDER_DETAILS_SUCCESS', function () {
        expect(reducer({
            ...initialState,
            orderDetailsRequest: true,
        }, {
            type: types.POST_ORDER_DETAILS_SUCCESS,
            details: details
        })).toEqual({
            ...initialState,
            orderDetails: details
        })
    });

    it('should handle DELETE_ORDER_DETAILS', function () {
        expect(reducer({
            ...initialState,
            orderDetails: details
        }, {
            type: types.DELETE_ORDER_DETAILS
        })).toEqual(initialState)
    });

})