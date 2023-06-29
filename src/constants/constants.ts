import PropTypes from "prop-types";

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

export  const BUN_COUNT = 2;

export const MODAL_ROOT = document.getElementById("react-modals");
export const ECS_CODE = 27;

export const DATA_PROP_TYPES = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([BUN, SAUCE, MAIN]).isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number.isRequired
});

export const BURGER_CONSTRUCTOR_PATH = '/';
export const LOGIN_PATH = '/login';
export const REGISTER_PATH = '/register';
export const FORGOT_PATH = '/forgot-password';
export const RESET_PASSWORD_PATH = '/reset-password';
export const PROFILE_PATH = '/profile';
export const INGREDIENT_PATH = '/ingredients/:id';

export const PROFILE = 'Профиль';
export const ORDER_HISTORY = 'История заказов';
export const EXIT = 'Выход';

export const ACCESS_TOKEN = 'token';
export const REFRESH_TOKEN = 'refreshToken';

export const JWT_EXPIRED_ERROR = 'jwt expired';