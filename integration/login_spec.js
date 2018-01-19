describe('Login Test', function(){
    it('Visits Rally', function(){
        cy
          .visit('/login.op')
          .get('#j_username').type('test@rallydev.com').should("have.value", "test@rallydev.com")
          .get('#j_password').type('Password').should("have.value", "Password")
          .get('#login-button').click()
          //.contains('Sign In').click()
          .url().should('include', '/dashboard')

    })
})


//visit a web page
//query for an element
//interact with that element
//assert about the content of the page