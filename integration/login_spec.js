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


// describe('Login Test', function(){
//    it('Visits Rally', function(){
//     cy.request({
//         method: 'POST',
//         url:'/login.op',
//         form: true,
//         body: {
//             username: 'test@rallydev.com',
//             password: 'Password'
//         }
//     }).then((resp) => {
//         expect(resp.status).to.eq(200)
//         console.log(resp);
//         })
//         //cy.getCookie('ZSESSIONID').should('exist')
//         cy.getCookie('JSESSIONID').should('exist')
//         cy.visit('/#/106394835536d/dashboard')
//         //cy.get('.chr-NavigationHeader-menuButtonTitleDiv').should('exist')
//     }) 
// })

     




    // describe('Test login',function(){
    //   it('logs in', function(){
    //     Cypress.Commands.add("login",(username, password) =>{
    //         cy.request({
    //             method: 'POST',
    //             url: '/login.op',
    //             form: true,
    //             body: {username: 'test@rallydev.com', password: 'Password'}
    //         }).then((resp) => {
    //             expect(resp.status).to.eq(200)
    //             console.log(resp);
    //            })
    //         cy.login(body.username, body.password){
    //             console.log(login) 
    //         }
    //   })
        // cy.login(username, password)
        //   console.log(login)
        // cy.getCookie('JSESSIONID')
        // .then((JSESSIONID) => {
        //     console.log(JSESSIONID)
        // })
    //   })  
    // })






describe('Test login',function(){
  it('logs in', function(){   
    Cypress.Commands.add('login', (userType, options = {}) => {
        const types = {
          user: {
            username: 'test@rallydev.com',
            password: 'Password'
          }
        }
        // grab the user
        const user = types[userType]
        // create the user first in the DB
          cy.request({
            url: '/login',
            method: 'POST',
            body: {
              user: 'test@rallydev.com',
              password: 'Password',
            }
          })
    })
    cy.visit('https://karla0.testn.f4tech.com/slm/')
     console.log(cy.visit)
    cy.login()
      console.log()
  })
})
    

    












//visit a web page
//query for an element
//interact with that element
//assert about the content of the page