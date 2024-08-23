describe('Realizar login na aplicacao', () => {

  beforeEach(() => {
    cy.visit('')
  })

  it('login com sucesso', () => {
    cy.get('[data-test="username"]').should('be.visible').type('standard_user')
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })
})