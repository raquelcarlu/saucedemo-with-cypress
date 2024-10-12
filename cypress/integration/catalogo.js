import '../support/commands'
import catalogoPage from '../support/pageElements/catalogoPage';

describe('Testes de catálogo', () => {
    beforeEach(() => {
        cy.login('standard_user');
    });

    it('filtrar produtos de A a Z', () => {
        cy.get(catalogoPage.filtro).select('Name (A to Z)')
        cy.get(catalogoPage.primeiroItemDescricao).should('contain', 'Sauce Labs Backpack')
        cy.get(catalogoPage.ultimoItemDescricao).should('contain', 'Test.allTheThings() T-Shirt (Red)')
    });

    it('filtrar produtos de Z a A', () => {
        cy.get(catalogoPage.filtro).select('Name (Z to A)')
        cy.get(catalogoPage.primeiroItemDescricao).should('contain', 'Test.allTheThings() T-Shirt (Red)')
        cy.get(catalogoPage.ultimoItemDescricao).should('contain', 'Sauce Labs Backpack')
    });

    it('filtrar produtos de low a high', () => {
        cy.get(catalogoPage.filtro).select('Price (low to high)')
        cy.get(catalogoPage.primeiroItemDescricao).should('contain', 'Sauce Labs Onesie')
        cy.get(catalogoPage.ultimoItemDescricao).should('contain', 'Sauce Labs Fleece Jacket')
    });

    it('filtrar produtos de high a low', () => {
        cy.get(catalogoPage.filtro).select('Price (high to low)')
        cy.get(catalogoPage.primeiroItemDescricao).should('contain', 'Sauce Labs Fleece Jacket')
        cy.get(catalogoPage.ultimoItemDescricao).should('contain', 'Sauce Labs Onesie')
    });

    it('abrir tela de detalhes do produto clicando no titulo do produto', () => {
        cy.get(catalogoPage.primeiroItemNome).click()
        cy.get(catalogoPage.backToProducts).should('be.visible')
        cy.get(catalogoPage.tituloProduto).should('contain', 'Sauce Labs Backpack')
    });

    it('abrir tela de detalhes do produto clicando na imagem do produto', () => {
        cy.get(catalogoPage.primeiroItemImagem).click()
        cy.get(catalogoPage.backToProducts).should('be.visible')
        cy.get(catalogoPage.tituloProduto).should('contain', 'Sauce Labs Backpack')
    });

    it('adicionar item ao carrinho', () => {
        cy.get(catalogoPage.addToCartBackpack).click()
        cy.get(catalogoPage.removeBackpack).should('be.visible')
        cy.get(catalogoPage.shoppingCartBadge).should('contain', '1')
    });

    it('remover item do carrinho', () => {
        cy.get(catalogoPage.addToCartBackpack).click()
        cy.get(catalogoPage.removeBackpack).click()
        cy.get(catalogoPage.removeBackpack).should('not.exist')
        cy.get(catalogoPage.shoppingCartBadge).should('not.exist')
    });
})