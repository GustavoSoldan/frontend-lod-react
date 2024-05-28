describe('GitHub Auth Request', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="sign-in"]').should('be.visible').click()
    cy.wait(1000)

    cy.get('button').contains('GitHub').click()

    cy.origin('https://github.com/login', () => {
      cy.wait(1000)
      cy.get('#login_field').type('???', { delay: 100 })
      cy.wait(1500)
      cy.get('#password').type('???', { delay: 100 })
      cy.wait(1200)
      cy.get('input[name="commit"]').click()
    })

    cy.url().should('include', 'http://localhost:5173/')
    cy.get('input[placeholder="Busque o seu nome de invocador"]')
      .scrollIntoView({ duration: 1000 })
      .should('be.visible')
      .type('testeInvocador', { delay: 100 })

    cy.wait(2750)

    cy.get('[data-testid="dashboard-button"]')
      .scrollIntoView({ duration: 1000 })
      .click()
    cy.url().should('include', 'http://localhost:5173/dashboard')

    // cy.get('button').contains('Continue with Google').click()
    // cy.wait(1000)

    // cy.origin('https://accounts.google.com/v3/signin/identifier', () => {
    //   cy.get('input[type="email"]')
    //     .should('be.visible')
    //     .type('engsDI2024@gmail.com')
    //   cy.get('button').contains('Avançar').click()
    // })
  })
})
