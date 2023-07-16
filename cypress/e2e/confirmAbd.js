/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
describe('confirm test', () => {
    it('handle confirm msg', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#name').type("asmaNassar")
        cy.on('window:confirm', (question) => {
           expect(question).to.contains("asma")
            return true;
        })
        cy.get('#confirmbtn').click()
    });
});