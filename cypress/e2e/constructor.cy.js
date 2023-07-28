describe("drags ingredients to constructor works correctly", function () {
    beforeEach(function () {
        cy.intercept("GET", "api/ingredients", {fixture: "ingredients.json"});
        cy.viewport(1300, 800);
        cy.visit('http://localhost:3000/');
    });

    it('should drag bun', function () {
        cy.get('[data-cy=ingredients]')
            .contains('Краторная булка N-200i')
            .trigger('dragstart');

        cy.get('[data-cy=constructor]')
            .trigger('drop');

        cy.get('[data-cy=constructor-bun-1]')
            .contains('Краторная булка N-200i')
            .should('exist');

        cy.get('[data-cy=constructor-bun-2]')
            .contains('Краторная булка N-200i')
            .should('exist');
    });

    it('should drag ingredient', function () {
        cy.get('[data-cy=ingredients]')
            .contains('Соус Spicy-X')
            .trigger('dragstart');

        cy.get('[data-cy=constructor]')
            .trigger('drop');

        cy.get('[data-cy=ingredients]')
            .contains('Соус с шипами Антарианского плоскоходца')
            .trigger('dragstart');

        cy.get('[data-cy=constructor]')
            .trigger('drop');

        cy.get('[data-cy=constructor-ingredients]')
            .contains('Соус Spicy-X')
            .should('exist');

        cy.get('[data-cy=constructor-ingredients]')
            .contains('Соус с шипами Антарианского плоскоходца')
            .should('exist');
    });
});

describe("ingredients modal works correctly", function () {
    beforeEach(function () {
        cy.intercept("GET", "api/ingredients", {fixture: "ingredients.json"});
        cy.viewport(1300, 800);
        cy.visit('http://localhost:3000/');
    });

    it('should open modal', function () {
        cy.contains('Детали ингредиента')
            .should('not.exist');

        cy.contains('Краторная булка N-200i')
            .click();

        cy.contains('Детали ингредиента')
            .should('exist');

        cy.get('#react-modals')
            .contains('Краторная булка N-200i')
            .should('exist');
    });

    it('should close modal on button click', function () {
        cy.contains('Детали ингредиента')
            .should('not.exist');

        cy.contains('Краторная булка N-200i')
            .click();

        cy.contains('Детали ингредиента')
            .should('exist');

        cy.get('#react-modals [data-cy=button-close-modal]')
            .click();

        cy.contains('Детали ингредиента')
            .should('not.exist');
    });

    it('should close modal on overlay click', function () {
        cy.contains('Детали ингредиента')
            .should('not.exist');

        cy.contains('Краторная булка N-200i')
            .click();

        cy.contains('Детали ингредиента')
            .should('exist');

        cy.get('[data-cy=modal-overlay]')
            .click('left', {force: true});

        cy.contains('Детали ингредиента')
            .should('not.exist');
    });
});

describe("users way", function () {
    beforeEach(function () {
        cy.intercept("GET", "api/ingredients", {fixture: "ingredients.json"});
        cy.intercept("POST", "api/orders", {fixture: "order.json"});
        cy.viewport(1300, 800);
        cy.visit('http://localhost:3000/');
    });

    it('should all way correctly', function () {

        // Добавили булки
        cy.get('[data-cy=ingredients]')
            .contains('Краторная булка N-200i')
            .trigger('dragstart');

        cy.get('[data-cy=constructor]')
            .trigger('drop');

        cy.get('[data-cy=constructor-bun-1]')
            .contains('Краторная булка N-200i')
            .should('exist');

        cy.get('[data-cy=constructor-bun-2]')
            .contains('Краторная булка N-200i')
            .should('exist');

        // Добавили ингредиенты
        cy.get('[data-cy=ingredients]')
            .contains('Соус Spicy-X')
            .trigger('dragstart');

        cy.get('[data-cy=constructor]')
            .trigger('drop');

        cy.get('[data-cy=ingredients]')
            .contains('Соус с шипами Антарианского плоскоходца')
            .trigger('dragstart');

        cy.get('[data-cy=constructor]')
            .trigger('drop');

        cy.get('[data-cy=ingredients]')
            .contains('Соус фирменный Space Sauce')
            .trigger('dragstart');

        cy.get('[data-cy=constructor]')
            .trigger('drop');

        cy.get('[data-cy=constructor-ingredients]')
            .contains('Соус Spicy-X')
            .should('exist');

        cy.get('[data-cy=constructor-ingredients]')
            .contains('Соус с шипами Антарианского плоскоходца')
            .should('exist');

        cy.get('[data-cy=constructor-ingredients]')
            .contains('Соус фирменный Space Sauce')
            .should('exist');

        // Меняем порядок ингредиентов
        cy.get('[data-cy=constructor-element]')
            .first()
            .contains('Соус Spicy-X')
            .should('exist');

        cy.get('[data-cy=constructor-element]')
            .last()
            .contains('Соус фирменный Space Sauce')
            .should('exist');

        cy.get('[data-cy=constructor-element]')
            .last()
            .trigger('dragstart');

        cy.get('[data-cy=constructor-element]')
            .first()
            .trigger('dragover')
            .trigger('drop');

        cy.get('[data-cy=constructor-element]')
            .first()
            .contains('Соус фирменный Space Sauce')
            .should('exist');

        cy.get('[data-cy=constructor-element]')
            .last()
            .contains('Соус с шипами Антарианского плоскоходца')
            .should('exist');

        // Нажали на кнопку создать заказ и нас перекинуло на страницу регистрации.
        cy.contains('Оформить заказ')
            .click();

        cy.contains('Вход')
            .should('exist');

        // Вводим логин и пароль
        cy.get('.cy-login-email-input input')
            .type('mageramovka@yandex.rure');

        cy.get('.cy-login-password-input input')
            .type('qwerty12345');

        // Нажимаем кнопку войти
        cy.contains('Войти')
            .click();

        cy.contains('Соберите бургер')
            .should('exist');

        cy.contains('Оформить заказ')
            .click();

        // Проверяем модальное окно
        cy.contains('Ваш заказ начали готовить')
            .should('exist');

        //Закрываем модальное окно
        cy.get('#react-modals [data-cy=button-close-modal]')
            .click();

        cy.contains('Ваш заказ начали готовить')
            .should('not.exist');
    });
});

