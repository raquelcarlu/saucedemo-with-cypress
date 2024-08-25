describe('Realizar login na aplicacao', function() {
  it('login com sucesso', function() {
    cy.visit('/')
    cy.get('[data-test="username"]').should('be.visible').type('standard_user')
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })
})