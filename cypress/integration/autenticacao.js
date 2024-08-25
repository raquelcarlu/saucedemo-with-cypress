import '../support/commands'
describe('Realizar autenticacao na aplicacao', () => {
    beforeEach(() => {
      cy.visit('/')
    });

    it('autenticar com sucesso', () => {
      cy.login('standard_user', 'secret_sauce')
      cy.get('[data-test="title"]').contains('Products')
    })

    //TODO login com credenciais de usuário bloqueado

    //TODO login com credenciais de um usuario que nao existe

    //TODO login com senha incorreta
  })