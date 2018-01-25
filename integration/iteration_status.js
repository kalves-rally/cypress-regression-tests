describe('Navigation Tests', function(){
    before(function(){
        cy.visit('/login.op')
         .get('#j_username').type('test@rallydev.com').should("have.value", "test@rallydev.com")
         .get('#j_password').type('Password').should("have.value", "Password")
         .get('#login-button').click()
    })

    it('navigates to Iteration Status page', function(){
        cy.visit('/#/20330408691d/iterationstatus')
          .url().should('include','/iterationstatus')
    })

    it('should click "Add New"', function(){
        cy.get('.chr-NavigationProjectSelectionContainer-textDescription', {timeout: 10000}).then(() => {
            cy.get("h1:contains('Iteration Status')").then(()=> {
                cy.get("span.x4-btn-inner-center:contains('+ Add New')").first().then((buttonText)=> {
                    cy.debug();
                    console.log('buttonText:', buttonText);
                    if(!Cypress.dom.isHidden(buttonText)){
                        cy.get("span.x4-btn-inner-center:contains('+ Add New')").should('be.hidden')
                        //buttonText.click();
                    } else {
                        cy.get("span.x4-btn-inner-center:contains('+ Add New')").should('be.visible')
                    }
                });
            });
        });
    })

})    