/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  describe('this is to test checkbox', () => {
    it('Scenario 1', () => {
        cy.visit("https://codenboxautomationlab.com/practice/") 
        cy.get('input[type="checkbox"]').check().should('be.checked')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    });
  });