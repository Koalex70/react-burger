import {combineReducers} from "redux";
import {burgerIngredientsReducer} from "./burger-ingredients";
import {burgerConstructorReducer} from "./burger-constructor";
import {orderDetailsReducer} from "./order-details";
import {registerReducer} from "./register";
import {loginReducer} from "./login";
import {forgotPasswordReducer} from "./forgot-password";
import {resetPasswordReducer} from "./reset-password";
import {userDataReducer} from "./user-data";
import {wsReducer} from "./root-reducer";
import {wsAuthReducer} from "./root-auth-reducer";

export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    orderDetails: orderDetailsReducer,
    register: registerReducer,
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    userData: userDataReducer,
    ws: wsReducer,
    wsAuth: wsAuthReducer,
});