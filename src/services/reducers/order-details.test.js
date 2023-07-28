import reducer from './order-details';
import * as types from '../actions/order-details'

describe('order details reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            orderDetailsRequest: false,
            orderDetailsFailed: false,
            orderDetails: null
        })
    });

    it('should handle POST_ORDER_DETAILS_REQUEST', function () {
        expect(reducer({
            orderDetailsRequest: false,
            orderDetailsFailed: false,
            orderDetails: null
        }, {
            type: types.POST_ORDER_DETAILS_REQUEST
        })).toEqual({
            orderDetailsRequest: true,
            orderDetailsFailed: false,
            orderDetails: null
        })
    });

    it('should handle POST_ORDER_DETAILS_FAILED', function () {
        expect(reducer({
            orderDetailsRequest: true,
            orderDetailsFailed: false,
            orderDetails: null
        }, {
            type: types.POST_ORDER_DETAILS_FAILED
        })).toEqual({
            orderDetailsRequest: false,
            orderDetailsFailed: true,
            orderDetails: null
        })
    });

    it('should handle POST_ORDER_DETAILS_SUCCESS', function () {
        expect(reducer({
            orderDetailsRequest: true,
            orderDetailsFailed: false,
            orderDetails: null
        }, {
            type: types.POST_ORDER_DETAILS_SUCCESS,
            details: {
                name: "Space флюоресцентный spicy бургер",
                number: 13227,
            }
        })).toEqual({
            orderDetailsRequest: false,
            orderDetailsFailed: false,
            orderDetails: {
                name: "Space флюоресцентный spicy бургер",
                number: 13227,
            }
        })
    });

    it('should handle DELETE_ORDER_DETAILS', function () {
        expect(reducer({
                orderDetailsRequest: false,
                orderDetailsFailed: false,
                orderDetails: {
                    name: "Space флюоресцентный spicy бургер",
                    number: 13227,
                }
            }, {
            type: types.DELETE_ORDER_DETAILS
        })).toEqual({
            orderDetailsRequest: false,
            orderDetailsFailed: false,
            orderDetails: null
        })
    });

})