/// <reference types ="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('this is to test alert', () => {
    it.skip('this is to test the normal alert', () => {
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('#OKTab > .btn').click()
        cy.on('window:alert',(theMsg)=>{
            /*print the message in alert on cy.log*/
           // cy.log("this is the message"+" "+theMsg)
           /*to assert if the message on normal alert is the same message i catch it or not*/
           expect(theMsg).to.eql("I am an alert box!")
        })
    });

    it('this is to test the prompt msg', () => {
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("asmaAlhelwa")
        })
        cy.get('#Textbox > .btn').click()
        cy.get('#demo1').contains('asmaAlhelwa')
        
    });
});