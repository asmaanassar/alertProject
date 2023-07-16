/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  
  describe('this is to test confirm win', () => {
    it('this is to test confirm with ok choice', () => {
        cy.visit("https://demo.automationtesting.in/Alerts.html")
      cy.contains('click the button to display a confirm box').click();
  
      cy.on('window:confirm', (str) => {
        expect(str).to.equal('Press a Button !');
       // return true; // Click "Ok" in the confirm dialog
      });
      cy.on('window:confirm', () => true)

      cy.get('#demo').should('have.text', 'You pressed Ok')
      
    });

    it.skip('this is to test handel confirm with cancel', () => {
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.contains('click the button to display a confirm box').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a Button !');
          });
        cy.on('window:confirm', () => false)
        cy.get('#demo').should('have.text','You Pressed Cancel')
      })
  });
 
  
  
  
  
  
  
  