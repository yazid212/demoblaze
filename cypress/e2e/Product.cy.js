describe('Product', () => {

    beforeEach(() => {
        cy.session('demoblaze-user', () => {
            cy.login('yazid212', 'Yazid212@')
        })
        cy.visit('https://www.demoblaze.com/')
    })

    it('should open Samsung Galaxy S6 product page', () => {
        cy.contains('.hrefch', 'Samsung galaxy s6').click()
        cy.url().should('include', 'prod.html')
    })

})
