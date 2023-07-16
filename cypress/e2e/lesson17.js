/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  describe('this multi test for cheack box, radio buttons and static& dynamic drop down list  ', () => {
    it('multi test', () => {
        cy.visit("https://codenboxautomationlab.com/practice/");
      
       //check box
  //single check for one checkbox

   // cy.get("#checkBoxOption1").check();

//     it will select all
//      cy.get("input[type='checkbox']").check()

//      it    will select specifc boxes based on my selection
//      cy.get("input[type='checkbox']").check(["option1","option2"])

//     check by index so index 1 means the second box
//     cy.get("input[type='checkbox']").eq(1).check();

//     always select the first checkbox
//     cy.get("input[type='checkbox']").first().check();
//    always select the last checkbox
//     cy.get("input[type='checkbox']").last().check();

   

    // radio buttons 

// to select the first radio button based on the index 

//

 //cy.get('#radio-btn-example').find("input[type='radio']").eq(1).check()

// last element 
//   cy.get('#radio-btn-example').find("input[type='radio']").last().check()


// first element 
//     cy.get('#radio-btn-example').find("input[type='radio']").first().check()
    
// static drop down list 


// cy.get("#dropdown-class-example").select("API")



// DYNAMIC dropdownlist 

cy.get('#autocomplete').type("HU");

cy.get('.ui-menu-item').each((el, index, list) => {
  if (index < 3) {
    cy.wrap(el).invoke('text').then((text) => {
      if (text.includes('Hungary')) {
       
        cy.wrap(el).wait(2000).click();
      }
    })
}
})
})
   
})
    
    // if (index < 3) {   
//     cy.wrap(el).select("Hungary");
// }