describe('template spec', () => {
  it('signin', () =>{
    cy.prompt([
      'visit https://www.demoblaze.com/',
      'tap on the sign in button',
      'Enter email address yazid@email.com',
      'enter password yazid123',
        'click sign up button',
    ])
  });
});

