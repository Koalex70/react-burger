import {TMessage} from "../services/types";

export const API_URL = 'https://norma.nomoreparties.space/api/';
export const API_BURGER_INGREDIENTS_ENDPOINT = 'ingredients';
export const API_BURGER_ORDERS_ENDPOINT = 'orders';

export const API_REGISTER_ENDPOINT = 'auth/register';
export const API_LOGIN_ENDPOINT = 'auth/login';
export const API_LOGOUT_ENDPOINT = 'auth/logout';
export const API_REFRESH_TOKEN_ENDPOINT = 'auth/token';
export const API_USER_DATA_ENDPOINT = 'auth/user';

export const API_FORGOT_PASSWORD_ENDPOINT = 'password-reset';
export const API_RESET_PASSWORD_ENDPOINT = 'password-reset/reset';

export const BUN = 'bun';
export const SAUCE = 'sauce';
export const MAIN = 'main';

export const BUN_COUNT = 2;

export const MODAL_ROOT = document.getElementById("react-modals");
export const ECS_CODE = 27;

export const BURGER_CONSTRUCTOR_PATH = '/';

export const LOGIN_PATH = '/login';
export const REGISTER_PATH = '/register';
export const FORGOT_PATH = '/forgot-password';
export const RESET_PASSWORD_PATH = '/reset-password';

export const PROFILE_PATH = '/profile';
export const PROFILE_ORDERS_PATH = '/profile/orders';
export const PROFILE_ORDERS_ELEMENT_PATH = '/profile/orders/:id'

export const INGREDIENT_PATH = '/ingredients/:id';

export const FEED_PATH = '/feed';
export const FEED_ELEMENT_PATH = '/feed/:id';

export const PROFILE = 'Профиль';
export const ORDER_HISTORY = 'История заказов';
export const EXIT = 'Выход';

export const ORDER_STATUS_DONE = 'done';
export const ORDER_STATUS_CREATED = 'created';
export const ORDER_STATUS_PENDING = 'pending';

export const ACCESS_TOKEN = 'token';
export const REFRESH_TOKEN = 'refreshToken';

export const JWT_EXPIRED_ERROR = 'jwt expired';

export const INGREDIENTS_DETAILS_HEADER = 'Детали ингредиента';
export const CREATE_ORDER_BUTTON_TEXT = 'Оформить заказ';
export const LOGIN_BUTTON_TEXT = 'Войти';


// TESTS
export const MESSAGE_WS: TMessage = {
    success: true,
    total: 12856,
    totalToday: 95,
    orders: [
        {
            _id: "64b79ff982e277001bf90d3f",
            status: "done",
            name: "Space флюоресцентный spicy бургер",
            createdAt: "2023-07-19T08:34:01.994Z",
            updatedAt: "2023-07-19T08:34:02.144Z",
            number: 13227,
            ingredients: [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0942"
            ]
        },
        {
            _id: "64b56de882e277001bf907ae",
            status: "done",
            name: "Флюоресцентный бургер",
            createdAt: "2023-07-17T16:35:52.786Z",
            updatedAt: "2023-07-17T16:35:52.919Z",
            number: 13092,
            ingredients: [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa093d"
            ]
        }
    ]
};

export const CY_INGREDIENTS_LIST = '[data-cy=ingredients]';
export const CY_CONSTRUCTOR_AREA = '[data-cy=constructor]';
export const CY_TOP_BUN = '[data-cy=constructor-bun-1]';
export const CY_BOTTOM_BUN = '[data-cy=constructor-bun-2]';
export const CY_CONSTRUCTOR_INGREDIENTS_LIST = '[data-cy=constructor-ingredients]';
export const CY_CONSTRUCTOR_ELEMENTS = '[data-cy=constructor-element]';

export const CY_MODAL = '#react-modals';
export const CY_BUTTON_CLOSE_MODAL = CY_MODAL + ' [data-cy=button-close-modal]';
export const CY_MODAL_OVERLAY = '[data-cy=modal-overlay]';

export const CY_BUN = 'Краторная булка N-200i';
export const CY_INGREDIENT1 = 'Соус Spicy-X';
export const CY_INGREDIENT2 = 'Соус с шипами Антарианского плоскоходца';
export const CY_INGREDIENT3 = 'Соус фирменный Space Sauce';

export const CY_INGREDIENTS_DETAILS = INGREDIENTS_DETAILS_HEADER;
export const CY_TAKE_ORDER_BUTTON = CREATE_ORDER_BUTTON_TEXT;
export const CY_LOGIN_BUTTON = LOGIN_BUTTON_TEXT;

export const CY_LOGIN_PAGE_SIGN = 'Вход';
export const CY_CONSTRUCTOR_PAGE_SIGN = 'Соберите бургер';
export const CY_MODAL_ORDER_SIGN = 'Ваш заказ начали готовить';

export const CY_EMAIL_INPUT = '.cy-login-email-input input';
export const CY_PASSWORD_INPUT = '.cy-login-password-input input';
