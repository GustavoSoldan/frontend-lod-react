describe('API Request', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')

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

    cy.wait(750)
    cy.get(
      'input[placeholder="Busque o seu nome de invocador: (Ex:Invocador#3333)"]',
    )
      .scrollIntoView({ duration: 1000 })
      .should('be.visible')
      .type('DrivenUwu#Uwu', { delay: 150 })
      .type('{enter}')
    cy.wait(1500)

    cy.url().should('include', 'http://localhost:5173/dashboard')

    // testes de carregamento de dados da Riot API
    cy.get('[data-testid="topo-dashboard"]').scrollIntoView({ duration: 1000 })
    cy.wait(4000)

    cy.get('[data-testid="infos-ranqueada"]').scrollIntoView({ duration: 1000 })
    cy.wait(1200)

    cy.get('[data-testid="mortes-abates-maestria"]').scrollIntoView({
      duration: 1000,
    })
    cy.wait(1200)

    cy.get('[data-testid="dano-abates-mortes-totais"]').scrollIntoView({
      duration: 1000,
    })
    cy.wait(1200)

    cy.get('[data-testid="partidas"]').scrollIntoView({ duration: 1000 })
  })
})
