/// <reference types="Cypress" />

describe('Loggi access in Staging', () => {

  it('goes to /loggin page', () => {
    cy.visit('https://staging.loggi.com/');
    cy.get('a').contains('Entrar').click();
    cy.url().should('contain', '/loggin');
  });

  it('inputs email and password', () => {
    cy.get('input[data-e2e="input-email"]').type('teste.e2e@loggi.com');
    cy.get('input[data-e2e="input-password"]').type('loggi');
  });

  it('logs in successfully and access Presto', () => {
    cy.get('button').contains('Entrar').click();
    cy.url().should('contain', '/presto/app');
  });
});
