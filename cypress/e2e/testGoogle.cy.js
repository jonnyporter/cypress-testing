describe('Test Google', () => {
    it('Verify google page', () => {
      cy.visit('https://www.google.com/');

      cy.get('[aria-label="Search"]').type('what is cypress?{enter}');

      cy.get('[href="https://www.cypress.io/"]').should('be.visible');
    })
  })