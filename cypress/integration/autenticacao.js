import '../support/commands'
describe('Realizar autenticacao na aplicacao', () => {
   
    it('autenticar com sucesso', () => {
      cy.login('standard_user')
      cy.get('[data-test="title"]').contains('Products')
    })

    it('tentar login com usuario bloqueado', () => {
      cy.login('locked_out_user')
      cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
    })

    it('tentar login com usuario inexistente', () => {
      cy.login('wrong_user')
      cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
    })

    it('tentar login com senha incorreta', () => {
      cy.login('wrong_password')
      cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
    })
  })