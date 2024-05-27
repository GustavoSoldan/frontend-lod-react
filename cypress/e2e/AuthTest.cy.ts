describe('Auth Request', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="sign-in"]').should('be.visible').click()
    cy.wait(1000)

    cy.get('button').contains('Continue with Google').click()
    cy.wait(1000)

    cy.origin('https://accounts.google.com/v3/signin/identifier', () => {
      cy.get('input[type="email"]')
        .should('be.visible')
        .type('engsDI2024@gmail.com')
      cy.get('button').contains('Avançar').click()
    })
  })
})
