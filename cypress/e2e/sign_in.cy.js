describe('DemoBlaze Login – Real Automation Version', () => {

    beforeEach(() => {
        cy.visit('https://www.demoblaze.com');
    });

    function openLoginModal() {
        cy.get('#login2').click();
        cy.get('#logInModal').should('be.visible');
    }

    // TC-AUTH-01
    it('TC-AUTH-01 – Login with valid data', () => {

        cy.window().then(win => {
            cy.stub(win, 'alert').as('alert');
        });

        openLoginModal();
        cy.get('#loginusername').type('testuser123');
        cy.get('#loginpassword').type('Test123!');
        cy.get('#logInModal .btn-primary').contains('Log in').click();

        cy.get('@alert').should('not.have.been.calledWith', 'Wrong password.');

        cy.contains('Log out', { timeout: 10000 }).should('be.visible');
    });

    // TC-AUTH-02
    it('TC-AUTH-02 – Login with wrong password', () => {

        cy.window().then(win => {
            cy.stub(win, 'alert').as('alert');
        });

        openLoginModal();
        cy.get('#loginusername').type('testuser123');
        cy.get('#loginpassword').type('WrongPass');
        cy.get('#logInModal .btn-primary').contains('Log in').click();

        cy.get('@alert').should('have.been.calledWith', 'Wrong password.');
    });

    // TC-AUTH-03
    it('TC-AUTH-03 – Login with empty username', () => {

        cy.window().then(win => {
            cy.stub(win, 'alert').as('alert');
        });

        openLoginModal();
        cy.get('#loginpassword').type('Test123!');
        cy.get('#logInModal .btn-primary').contains('Log in').click();

        cy.get('@alert').should('have.been.calledWith', 'Please fill out Username and Password.');
    });

    // TC-AUTH-04
    it('TC-AUTH-04 – Login with empty password', () => {

        cy.window().then(win => {
            cy.stub(win, 'alert').as('alert');
        });

        openLoginModal();
        cy.get('#loginusername').type('testuser123');
        cy.get('#logInModal .btn-primary').contains('Log in').click();

        cy.get('@alert').should('have.been.calledWith', 'Please fill out Username and Password.');
    });

    // TC-AUTH-05
    it('TC-AUTH-05 – Login with empty username & password', () => {

        cy.window().then(win => {
            cy.stub(win, 'alert').as('alert');
        });

        openLoginModal();
        cy.get('#logInModal .btn-primary').contains('Log in').click();

        cy.get('@alert').should('have.been.calledWith', 'Please fill out Username and Password.');
    });

    // TC-AUTH-06
    it('TC-AUTH-06 – Login with special characters in username', () => {

        cy.window().then(win => {
            cy.stub(win, 'alert').as('alert');
        });

        openLoginModal();
        cy.get('#loginusername').type('@@@###');
        cy.get('#loginpassword').type('Test123!');
        cy.get('#logInModal .btn-primary').contains('Log in').click();

        cy.get('@alert').should('have.been.called');
    });

    // TC-AUTH-07
    it('TC-AUTH-07 – Login persistence after refresh', () => {

        cy.window().then(win => {
            cy.stub(win, 'alert').as('alert');
        });

        openLoginModal();
        cy.get('#loginusername').type('testuser123');
        cy.get('#loginpassword').type('Test123!');
        cy.get('#logInModal .btn-primary').contains('Log in').click();

        cy.contains('Log out', { timeout: 10000 }).should('be.visible');

        cy.reload();

        cy.contains('Log out', { timeout: 10000 }).should('be.visible');
    });
});
