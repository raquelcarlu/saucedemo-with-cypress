// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-test="username"]').should('be.visible').type(email)
    cy.get('[data-test="password"]').should('be.visible').type(password)
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('adicionarAoCarrinho', (quantidade) => {
    if(quantidade == 3){
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        quantidade--;
    }
    if(quantidade == 2){
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        quantidade--;
    }
    if (quantidade == 1){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }
    else{
        console.log("quantidade de produtos inválida")
    }
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })