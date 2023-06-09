import {combineReducers} from "redux";
import {burgerIngredientsReducer} from "./burger-ingredients";
import {burgerConstructorReducer} from "./burger-constructor";
import {ingredientDetailsReducer} from "./ingredient-details";
import {orderDetailsReducer} from "./order-details";
import {registerReducer} from "./register";
import {loginReducer} from "./login";
import {forgotPasswordReducer} from "./forgot-password";
import {resetPasswordReducer} from "./reset-password";
import {userDataReducer} from "./user-data";

export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderDetails: orderDetailsReducer,
    register: registerReducer,
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    userData: userDataReducer,
});