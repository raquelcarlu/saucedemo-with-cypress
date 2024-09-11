import '../support/commands'

describe('Testes de compra', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('standard_user', 'secret_sauce');
    });

    it('remover produto do carrinho pela tela Your Cart', () => {
        cy.adicionarAoCarrinho()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item"]').should('exist')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="inventory-item"]').should('not.exist')
    });

    it('realizar compra completa', () => {
        cy.adicionarAoCarrinho()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('José')
        cy.get('[data-test="lastName"]').type('Da Silva')
        cy.get('[data-test="postalCode"]').type('123456')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
    });

    it('cancelar checkout na tela de Overview', () => {
        cy.adicionarAoCarrinho()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('José')
        cy.get('[data-test="lastName"]').type('Da Silva')
        cy.get('[data-test="postalCode"]').type('123456')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="cancel"]').click()
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    it('deixar todos os campos obrigatórios em branco no checkout', () => {
        cy.adicionarAoCarrinho()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
    });

    it('deixar campo obrigatório "First Name" em branco no checkout', () => {
        cy.adicionarAoCarrinho()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="lastName"]').type('Da Silva')
        cy.get('[data-test="postalCode"]').type('123456')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
    });

    it('deixar campo obrigatorio "Last Name" em branco no checkout', () => {
        cy.adicionarAoCarrinho()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('José')
        cy.get('[data-test="postalCode"]').type('123456')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('contain', 'Error: Last Name is required')
    });

    it('deixar campo obrigatorio "Zip Code" em branco no checkout', () => {
        cy.adicionarAoCarrinho()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('José')
        cy.get('[data-test="lastName"]').type('Da Silva')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('contain', 'Error: Postal Code is required')
    });

});

