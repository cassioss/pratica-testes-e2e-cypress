/// <reference types="Cypress" />

describe('Google search', () => {

  beforeEach(() => {
    cy.visit('https://www.google.com/');
    cy.get('input[role=combobox]').should('have.length', 1);
  });

  it('search when typing on search box and pressing Enter', () => {
    cy.get('input[role=combobox]').type('Loggi entregador{enter}');
  });

  it('search when typing on search box and clicking on one of the items', () => {
    cy.get('input[role=combobox]').type('Loggi entregador');
    cy.get('li').contains('loggi entregador contato').parent().click();
  });
});
