import PropTypes from "prop-types";

export const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

export const BUN = 'bun';
export const SAUCE = 'sauce';
export const MAIN = 'main';

export const MODAL_ROOT = document.getElementById("react-modals");


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