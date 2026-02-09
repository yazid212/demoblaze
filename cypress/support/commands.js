// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, password) => {

    cy.visit('https://www.demoblaze.com/')

    // Open modal
    cy.get('#login2').click()

    // Wait until modal is really visible
    cy.get('#logInModal')
        .should('have.class', 'show')
        .and('be.visible')

    // Now interact safely
    cy.get('#loginusername').should('be.visible').clear().type(username)
    cy.get('#loginpassword').should('be.visible').clear().type(password)

    cy.contains('#logInModal button', 'Log in').click()

    // Assert login success
    cy.contains(`Welcome ${username}`, { timeout: 10000 })
        .should('be.visible')
})

