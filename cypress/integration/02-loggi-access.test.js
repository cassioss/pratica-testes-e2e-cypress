/// <reference types="Cypress" />

describe('Loggi access in Staging', () => {

  it('login, input name/password and access Presto', () => {
    cy.visit('https://staging.loggi.com/');
    cy.get('a').contains('Entrar').click();
    cy.get('input[data-e2e="input-email"]').type('teste.e2e@loggi.com');
    cy.get('input[data-e2e="input-password"]').type('loggi');
    cy.get('button').contains('Entrar').click();
    cy.url().should('contain', '/presto/app');
  });

});
