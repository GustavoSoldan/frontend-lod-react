describe('UI Request', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    // login
    cy.get('[data-testid="sign-in"]').should('be.visible').click()
    cy.wait(1000)
    cy.get('button').contains('GitHub').click()
    cy.origin('https://github.com/login', () => {
      cy.wait(1000)
      cy.get('#login_field').type('elziorocha', { delay: 100 })
      cy.wait(1500)
      cy.get('#password').type('30082422aA', { delay: 100 })
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
    cy.get(
      'input[placeholder="Busque o seu nome de invocador: (Ex:Invocador#3333)"]',
    )
      .scrollIntoView({ duration: 1000 })
      .should('be.visible')
      .type('elzio#3125', { delay: 100 })
      .type('{enter}')
    cy.wait(1500)

    // testes de UI - Dashboard
    cy.wait(2000)
    cy.url().should('include', 'http://localhost:5173/dashboard')

    cy.wait(1000)
    cy.get('[data-testid="options"]:eq(4)').click()

    // testes de UI - Contato
    cy.url().should('include', 'http://localhost:5173/contato')

    cy.get('[data-testid="Leonardo"]')
      .should('be.visible')
      .scrollIntoView({ duration: 1000 })

    cy.get('[data-testid="voltar-contato"]')
      .should('be.visible')
      .scrollIntoView({ duration: 1000 })
      .click()
    cy.url().should('include', 'http://localhost:5173/dashboard')

    // testes de UI - Ajuda
    cy.wait(2000)
    cy.get('[data-testid="options"]:eq(5)').click()

    cy.wait(1300)
    cy.get('[data-testid="abrir-language"]').should('be.visible').click()
    cy.wait(1750)
    cy.get('[data-testid="fechar-language"]').should('be.visible').click()

    cy.wait(1300)
    cy.get('[data-testid="abrir-bug"]').should('be.visible').click()
    cy.wait(1750)
    cy.get('[data-testid="fechar-bug"]').should('be.visible').click()
  })
})
