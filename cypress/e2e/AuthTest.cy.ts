describe('GitHub Auth Request', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.wait(1000)
    cy.get('[data-testid="sign-in"]').should('be.visible').click()
    cy.wait(1000)

    cy.get('button').contains('GitHub').click()

    cy.origin('https://github.com/login', () => {
      cy.wait(1000)
      cy.get('#login_field').type('???', { delay: 100 })
      cy.wait(1500)
      cy.get('#password').type(Cypress.env('GITHUB_PASSWORD'), { delay: 100 })
      cy.wait(1200)
      cy.get('input[name="commit"]').click()
    })
  })
})
