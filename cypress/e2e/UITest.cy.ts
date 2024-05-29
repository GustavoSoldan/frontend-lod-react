describe('UI Request', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    // login
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

    // retoro à home
    cy.url().should('include', 'http://localhost:5173/')

    // testes de UI - Home
    cy.get('[data-testid="footer"]')
      .scrollIntoView({ duration: 1200 })
      .should('be.visible')

    cy.wait(1500)
    cy.get('input[placeholder="Busque o seu nome de invocador"]')
      .scrollIntoView({ duration: 1000 })
      .should('be.visible')
      .type('testeInvocador', { delay: 100 })
    cy.wait(1500)

    cy.get('[data-testid="dashboard-button"]')
      .scrollIntoView({ duration: 1000 })
      .click()

    // testes de UI - Dashboard
    cy.wait(2000)
    cy.url().should('include', 'http://localhost:5173/dashboard')

    cy.wait(1000)
    cy.get('[data-testid="options"]:eq(4)').click()

    // testes de UI - Contato
    cy.url().should('include', 'http://localhost:5173/contato')
    cy.wait(2300)
    cy.get('[data-testid="voltar-contato"]').should('be.visible').click()

    cy.url().should('include', 'http://localhost:5173/dashboard')

    // testes de UI - Ajuda
    cy.wait(2000)
    cy.get('[data-testid="options"]:eq(5)').click()

    cy.wait(1000)
    cy.get('[data-testid="abrir-language"]').should('be.visible').click()
    cy.wait(1750)
    cy.get('[data-testid="fechar-language"]').should('be.visible').click()
    cy.wait(1000)
    cy.get('[data-testid="abrir-bug"]').should('be.visible').click()
    cy.wait(1750)
    cy.get('[data-testid="fechar-bug"]').should('be.visible').click()
  })
})
