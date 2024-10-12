import '../support/commands'
import catalogoPage from '../support/pageElements/catalogoPage';
import carrinhoPage from '../support/pageElements/carrinhoPage';

describe('Testes de compra', () => {
    beforeEach(() => {
        cy.login('standard_user');
    });

    it('remover produto do carrinho pela tela Your Cart', () => {
        cy.adicionarAoCarrinho(1)
        cy.get(carrinhoPage.carrinho).click()
        cy.get(carrinhoPage.itemCarrinho).should('exist')
        cy.get(carrinhoPage.removeItemBackpack).click()
        cy.get(carrinhoPage.itemCarrinho).should('not.exist')
    });

    it('realizar compra completa', () => {
        cy.adicionarAoCarrinho(1)
        cy.get(carrinhoPage.carrinho).click()
        cy.get(carrinhoPage.checkout).click()
        cy.get(carrinhoPage.formularioFirstName).type('José')
        cy.get(carrinhoPage.formularioLastName).type('Da Silva')
        cy.get(carrinhoPage.formularioPostalCode).type('123456')
        cy.get(carrinhoPage.continue).click()
        cy.get(carrinhoPage.finish).click()
        cy.get(carrinhoPage.completeHeader).should('contain', 'Thank you for your order!')
    });

    it('cancelar checkout na tela de Overview', () => {
        cy.adicionarAoCarrinho(1)
        cy.get(carrinhoPage.carrinho).click()
        cy.get(carrinhoPage.checkout).click()
        cy.get(carrinhoPage.formularioFirstName).type('José')
        cy.get(carrinhoPage.formularioLastName).type('Da Silva')
        cy.get(carrinhoPage.formularioPostalCode).type('123456')
        cy.get(carrinhoPage.continue).click()
        cy.get(carrinhoPage.cancel).click()
        cy.get(catalogoPage.tituloPage).should('contain', 'Products')
    });

    it('deixar todos os campos obrigatórios em branco no checkout', () => {
        cy.adicionarAoCarrinho(1)
        cy.get(carrinhoPage.carrinho).click()
        cy.get(carrinhoPage.checkout).click()
        cy.get(carrinhoPage.continue).click()
        cy.get(carrinhoPage.error).should('contain', 'Error: First Name is required')
    });

    it('deixar campo obrigatório "First Name" em branco no checkout', () => {
        cy.adicionarAoCarrinho(1)
        cy.get(carrinhoPage.carrinho).click()
        cy.get(carrinhoPage.checkout).click()
        cy.get(carrinhoPage.formularioLastName).type('Da Silva')
        cy.get(carrinhoPage.formularioPostalCode).type('123456')
        cy.get(carrinhoPage.continue).click()
        cy.get(carrinhoPage.error).should('contain', 'Error: First Name is required')
    });

    it('deixar campo obrigatorio "Last Name" em branco no checkout', () => {
        cy.adicionarAoCarrinho(1)
        cy.get(carrinhoPage.carrinho).click()
        cy.get(carrinhoPage.checkout).click()
        cy.get(carrinhoPage.formularioFirstName).type('José')
        cy.get(carrinhoPage.formularioPostalCode).type('123456')
        cy.get(carrinhoPage.continue).click()
        cy.get(carrinhoPage.error).should('contain', 'Error: Last Name is required')
    });

    it('deixar campo obrigatorio "Zip Code" em branco no checkout', () => {
        cy.adicionarAoCarrinho(1)
        cy.get(carrinhoPage.carrinho).click()
        cy.get(carrinhoPage.checkout).click()
        cy.get(carrinhoPage.formularioFirstName).type('José')
        cy.get(carrinhoPage.formularioLastName).type('Da Silva')
        cy.get(carrinhoPage.continue).click()
        cy.get(carrinhoPage.error).should('contain', 'Error: Postal Code is required')
    });

    it('validar valor total do carrinho', () => {
        cy.adicionarAoCarrinho(2)
        cy.get(carrinhoPage.carrinho).click()
        cy.get(carrinhoPage.checkout).click()
        cy.get(carrinhoPage.formularioFirstName).type('José')
        cy.get(carrinhoPage.formularioLastName).type('Da Silva')
        cy.get(carrinhoPage.formularioPostalCode).type('123456')
        cy.get(carrinhoPage.continue).click()
        cy.get(carrinhoPage.subtotalLabel).should('contain', '39.98')
    });

});

