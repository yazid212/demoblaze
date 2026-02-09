describe('Verify signup functionality',()=>{
    it('Signup with valid username and password',()=>{
        cy.visit('/')
        cy.get('#signin2').click();
        cy.get('#sign-username').type('yazid21')
        cy.wait(3000)
        cy.get('#sign-password').type('Yazid212@')
        cy.contains('.btn-primary','Sign up').click()

    })
})