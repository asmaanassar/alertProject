/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

describe('This is to test mouse hover', () => {
  it('This is a test of top mouse hover', () => {
    cy.visit("https://codenboxautomationlab.com/practice/");

    // Trigger mouse hover on the button
    cy.get("#mousehover").invoke("show");
    cy.get(".mouse-hover-content").invoke("attr", "style", "display: block");
    // Click on the "Reload" option
    cy.contains("Reload").click();

    // Verify that the reload message is displayed
    //cy.contains("Reload Clicked!").should("be.visible");

    // Perform mouse hover again
    cy.get("#mousehover").invoke("show");
    cy.get(".mouse-hover-content").invoke("attr", "style", "display: block");
    // Click on the "Top" option
    cy.contains("Top").click();

    // Verify that the top message is displayed
    //cy.contains("Top Clicked!").should("be.visible");
});
});








 