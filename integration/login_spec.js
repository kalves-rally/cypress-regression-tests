// describe('Login Test', function(){
//     it('Visits Rally', function(){
//         cy
//           //the url is stored on cypress.json
//           .visit('/login.op')
//           .get('#j_username').type('test@rallydev.com').should("have.value", "test@rallydev.com")
//           .get('#j_password').type('Password').should("have.value", "Password")
//           .get('#login-button').click()
//           //.contains('Sign In').click()
//           .url().should('include', '/dashboard')
          

//     })
// })

describe('Login Test', function(){
   it('Visits Rally', function(){
    cy.request({
        method: 'POST',
        url:'/login.op',
        form: true,
        body: {
            username: 'test@rallydev.com',
            password: 'Password'
        }
    }).then((resp) => {
        expect(resp.status).to.eq(200)
        console.log(resp);
    })
    cy.getCookie('ZSESSIONID','VsqEZFcSiOuoA3S6dElM3gU5NQUWuleFAJBz64c').should('exist')
   }) 
})



//visit a web page
//query for an element
//interact with that element
//assert about the content of the page