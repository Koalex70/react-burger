import {
    CY_BOTTOM_BUN,
    CY_BUN,
    CY_BUTTON_CLOSE_MODAL,
    CY_CONSTRUCTOR_AREA,
    CY_CONSTRUCTOR_ELEMENTS,
    CY_CONSTRUCTOR_INGREDIENTS_LIST, CY_CONSTRUCTOR_PAGE_SIGN,
    CY_EMAIL_INPUT,
    CY_INGREDIENT1,
    CY_INGREDIENT2,
    CY_INGREDIENT3,
    CY_INGREDIENTS_DETAILS,
    CY_INGREDIENTS_LIST, CY_LOGIN_BUTTON,
    CY_LOGIN_PAGE_SIGN,
    CY_MODAL, CY_MODAL_ORDER_SIGN,
    CY_MODAL_OVERLAY, CY_PASSWORD_INPUT,
    CY_TAKE_ORDER_BUTTON,
    CY_TOP_BUN
} from "../../src/constants/constants";

describe("drags ingredients to constructor works correctly", function () {
    beforeEach(function () {
        cy.intercept("GET", "api/ingredients", {fixture: "ingredients.json"});
        cy.viewport(1300, 800);
        cy.visit('/');
    });

    it('should drag bun', function () {
        cy.get(CY_INGREDIENTS_LIST)
            .contains(CY_BUN)
            .trigger('dragstart');

        cy.get(CY_CONSTRUCTOR_AREA)
            .trigger('drop');

        cy.get(CY_TOP_BUN)
            .contains(CY_BUN)
            .should('exist');

        cy.get(CY_BOTTOM_BUN)
            .contains(CY_BUN)
            .should('exist');
    });

    it('should drag ingredient', function () {
        cy.get(CY_INGREDIENTS_LIST)
            .contains(CY_INGREDIENT1)
            .trigger('dragstart');

        cy.get(CY_CONSTRUCTOR_AREA)
            .trigger('drop');

        cy.get(CY_INGREDIENTS_LIST)
            .contains(CY_INGREDIENT2)
            .trigger('dragstart');

        cy.get(CY_CONSTRUCTOR_AREA)
            .trigger('drop');

        cy.get(CY_CONSTRUCTOR_INGREDIENTS_LIST)
            .contains(CY_INGREDIENT1)
            .should('exist');

        cy.get(CY_CONSTRUCTOR_INGREDIENTS_LIST)
            .contains(CY_INGREDIENT2)
            .should('exist');
    });
});

describe("ingredients modal works correctly", function () {
    beforeEach(function () {
        cy.intercept("GET", "api/ingredients", {fixture: "ingredients.json"});
        cy.viewport(1300, 800);
        cy.visit('/');
    });

    it('should open modal', function () {
        cy.contains(CY_INGREDIENTS_DETAILS)
            .should('not.exist');

        cy.contains(CY_BUN)
            .click();

        cy.contains(CY_INGREDIENTS_DETAILS)
            .should('exist');

        cy.get(CY_MODAL)
            .contains(CY_BUN)
            .should('exist');
    });

    it('should close modal on button click', function () {
        cy.contains(CY_INGREDIENTS_DETAILS)
            .should('not.exist');

        cy.contains(CY_BUN)
            .click();

        cy.contains(CY_INGREDIENTS_DETAILS)
            .should('exist');

        cy.get(CY_BUTTON_CLOSE_MODAL)
            .click();

        cy.contains(CY_INGREDIENTS_DETAILS)
            .should('not.exist');
    });

    it('should close modal on overlay click', function () {
        cy.contains(CY_INGREDIENTS_DETAILS)
            .should('not.exist');

        cy.contains(CY_BUN)
            .click();

        cy.contains(CY_INGREDIENTS_DETAILS)
            .should('exist');

        cy.get(CY_MODAL_OVERLAY)
            .click('left', {force: true});

        cy.contains(CY_INGREDIENTS_DETAILS)
            .should('not.exist');
    });
});

describe("users way", function () {
    beforeEach(function () {
        cy.intercept("GET", "api/ingredients", {fixture: "ingredients.json"});
        cy.intercept("POST", "api/orders", {fixture: "order.json"});
        cy.viewport(1300, 800);
        cy.visit('/');
    });

    it('should all way correctly', function () {

        // Добавили булки
        cy.get(CY_INGREDIENTS_LIST)
            .contains(CY_BUN)
            .trigger('dragstart');

        cy.get(CY_CONSTRUCTOR_AREA)
            .trigger('drop');

        cy.get(CY_TOP_BUN)
            .contains(CY_BUN)
            .should('exist');

        cy.get(CY_BOTTOM_BUN)
            .contains(CY_BUN)
            .should('exist');

        // Добавили ингредиенты
        cy.get(CY_INGREDIENTS_LIST)
            .contains(CY_INGREDIENT1)
            .trigger('dragstart');

        cy.get(CY_CONSTRUCTOR_AREA)
            .trigger('drop');

        cy.get(CY_INGREDIENTS_LIST)
            .contains(CY_INGREDIENT2)
            .trigger('dragstart');

        cy.get(CY_CONSTRUCTOR_AREA)
            .trigger('drop');

        cy.get(CY_INGREDIENTS_LIST)
            .contains(CY_INGREDIENT3)
            .trigger('dragstart');

        cy.get(CY_CONSTRUCTOR_AREA)
            .trigger('drop');

        cy.get(CY_CONSTRUCTOR_INGREDIENTS_LIST)
            .contains(CY_INGREDIENT1)
            .should('exist');

        cy.get(CY_CONSTRUCTOR_INGREDIENTS_LIST)
            .contains(CY_INGREDIENT2)
            .should('exist');

        cy.get(CY_CONSTRUCTOR_INGREDIENTS_LIST)
            .contains(CY_INGREDIENT3)
            .should('exist');

        // Меняем порядок ингредиентов
        cy.get(CY_CONSTRUCTOR_ELEMENTS)
            .first()
            .contains(CY_INGREDIENT1)
            .should('exist');

        cy.get(CY_CONSTRUCTOR_ELEMENTS)
            .last()
            .contains(CY_INGREDIENT3)
            .should('exist');

        cy.get(CY_CONSTRUCTOR_ELEMENTS)
            .last()
            .trigger('dragstart');

        cy.get(CY_CONSTRUCTOR_ELEMENTS)
            .first()
            .trigger('dragover')
            .trigger('drop');

        cy.get(CY_CONSTRUCTOR_ELEMENTS)
            .first()
            .contains(CY_INGREDIENT3)
            .should('exist');

        cy.get(CY_CONSTRUCTOR_ELEMENTS)
            .last()
            .contains(CY_INGREDIENT2)
            .should('exist');

        // Нажали на кнопку создать заказ и нас перекинуло на страницу регистрации.
        cy.contains(CY_TAKE_ORDER_BUTTON)
            .click();

        cy.contains(CY_LOGIN_PAGE_SIGN)
            .should('exist');

        // Вводим логин и пароль
        cy.get(CY_EMAIL_INPUT)
            .type('mageramovka@yandex.rure');

        cy.get(CY_PASSWORD_INPUT)
            .type('qwerty12345');

        // Нажимаем кнопку войти
        cy.contains(CY_LOGIN_BUTTON)
            .click();

        cy.contains(CY_CONSTRUCTOR_PAGE_SIGN)
            .should('exist');

        cy.contains(CY_TAKE_ORDER_BUTTON)
            .click();

        // Проверяем модальное окно
        cy.contains(CY_MODAL_ORDER_SIGN)
            .should('exist');

        //Закрываем модальное окно
        cy.get(CY_BUTTON_CLOSE_MODAL)
            .click();

        cy.contains(CY_MODAL_ORDER_SIGN)
            .should('not.exist');
    });
});

