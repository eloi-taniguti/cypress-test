/// <reference types="cypress" />
import * as pt from '../../fixtures/pt.json'
import InitialPage from '../../pages/InitialPage'

describe('Agile Tutorial - Initial Page tests', () => {
  let initialPage: InitialPage

  beforeEach(() => {
    cy.visit('/cover-11/')
    initialPage = new InitialPage()
  })

  it('verify page elements', () => {
    // verify page has the correct title
    cy.assertPageTitle(pt.coverPageTitle)
    // verify video player attributes
    cy.get('video').should((el) => {
      expect(el).to.have.attr('playsinline')
      expect(el).to.have.attr('muted')
      expect(el).to.have.attr('autoplay')
      expect(el).to.have.attr('loop')
    })
  })

  it('navigates to Config page', () => {
    // verify user can go to Config page
    initialPage.navigateToConfigPage()
  })

})
