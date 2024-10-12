import users from '../fixtures/users.json'
import loginPage from './pageElements/loginPage'
import catalogoPage from './pageElements/catalogoPage'

Cypress.Commands.add('login', (scenario) => {
    cy.visit('/')

    const user = users.data.find(users => users.scenario === scenario)

    cy.get(loginPage.getUsersName).should('be.visible').type(user.username)
    cy.get(loginPage.getPassword).should('be.visible').type(user.password)
    cy.get(loginPage.loginButton).click()
})

Cypress.Commands.add('adicionarAoCarrinho', (quantidade) => {
    if(quantidade == 3){
        cy.get(catalogoPage.addToCartTShirt).click()
        quantidade--;
    }
    if(quantidade == 2){
        cy.get(catalogoPage.addToCartBikeLight).click()
        quantidade--;
    }
    if (quantidade == 1){
        cy.get(catalogoPage.addToCartBackpack).click()
    }
    else{
        console.log("quantidade de produtos inválida")
    }
})