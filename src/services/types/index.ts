import BurgerIngredientsList from "../../components/burger-ingredients-list/burger-ingredients-list";
import BurgerConstructorElement from "../../components/burger-constructor-element/burger-constructor-element";
import ButtonWithPrice from "../../components/button-with-price/button-with-price";
import React from "react";
import ModalOverlay from "../../components/modal-overlay/modal-overlay";
import PasswordInput from "../../components/password-input/password-input";
import ProfileTabs from "../../components/profile-tabs/profile-tabs";
import {ProtectedRouteElement} from "../../components/protected-route-element/protected-route-element";

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
    ingredient: {
        id: string;
        uuid: string;
        name: string;
        image_mobile: string;
        price: number;
    },
    index: number,
    moveCard: (dragIndex:number, hoverIndex:number) => void
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

