/// <reference types="cypress" />

import InitialPage from '../../pages/InitialPage'

describe('Agile Tutorial - Initial Page tests', () => {
  let initalPage: InitialPage

  beforeEach(() => {
    cy.visit('/')
    initalPage = new InitialPage()

  })

  it('verify page elements', () => {
    cy.assertPageTitle('AGILE Tutorial de configuração')
    cy.get('video').should((el) => {
      expect(el).to.have.attr('playsinline')
      expect(el).to.have.attr('muted')
      expect(el).to.have.attr('autoplay')
      expect(el).to.have.attr('loop')
    })
  })

  it('navigates to Config Steps', () => {
    initalPage.navigateToConfigSteps()
  })

})
