import '../support/commands'

describe('Testes de catálogo', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('standard_user', 'secret_sauce');
    });

    it('filtrar produtos de A a Z', () => {
        cy.get('.product_sort_container').select('Name (A to Z)')
        cy.get("#inventory_container > div > div:nth-child(1) > div.inventory_item_description").should('contain', 'Sauce Labs Backpack')
        cy.get("#inventory_container > div > div:nth-child(6) > div.inventory_item_description").should('contain', 'Test.allTheThings() T-Shirt (Red)')
    });

    it('filtrar produtos de Z a A', () => {
        cy.get('.product_sort_container').select('Name (Z to A)')
        cy.get("#inventory_container > div > div:nth-child(1) > div.inventory_item_description").should('contain', 'Test.allTheThings() T-Shirt (Red)')
        cy.get("#inventory_container > div > div:nth-child(6) > div.inventory_item_description").should('contain', 'Sauce Labs Backpack')
    });

    it('filtrar produtos de low a high', () => {
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get("#inventory_container > div > div:nth-child(1) > div.inventory_item_description").should('contain', 'Sauce Labs Onesie')
        cy.get("#inventory_container > div > div:nth-child(6) > div.inventory_item_description").should('contain', 'Sauce Labs Fleece Jacket')
    });

    it('filtrar produtos de high a low', () => {
        cy.get('.product_sort_container').select('Price (high to low)')
        cy.get("#inventory_container > div > div:nth-child(1) > div.inventory_item_description").should('contain', 'Sauce Labs Fleece Jacket')
        cy.get("#inventory_container > div > div:nth-child(6) > div.inventory_item_description").should('contain', 'Sauce Labs Onesie')
    });

    it('abrir tela de detalhes do produto clicando no titulo do produto', () => {
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
        cy.get('[data-test="back-to-products"]').should('be.visible')
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack')
    });

    it('abrir tela de detalhes do produto clicando na imagem do produto', () => {
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click()
        cy.get('[data-test="back-to-products"]').should('be.visible')
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack')
    });

    it('adicionar item ao carrinho', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
    });

    it('remover item do carrinho', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist')
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
    });
})