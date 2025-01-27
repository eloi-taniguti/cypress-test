/// <reference types="cypress" />
import * as pt from '../../fixtures/pt.json'
import BackCoverPage from '../../pages/BackCoverPage'
import { getTextContent } from '../../support/utils'

describe('Agile Tutorial - Back Cover Page tests', () => {
  let backCoverPage: BackCoverPage

  beforeEach(() => {
    cy.visit('/back-cover-7/')
    backCoverPage = new BackCoverPage()
  })

  it('verify page elements', () => {
    // verify the url displayed
    backCoverPage.getCenterText()
      .should('have.attr', 'href', pt.url)
      .and('have.text', pt.urlLabel)
    // verify the address
    backCoverPage.getAddressText().then((text) => {
      expect(getTextContent(text[0])).to.equal(pt.address.name)
      expect(getTextContent(text[1])).to.equal(pt.address.street)
      expect(getTextContent(text[2])).to.equal(pt.address.city)
      expect(getTextContent(text[3])).to.equal(pt.address.state)
      expect(getTextContent(text[4])).to.equal(pt.address.country)
    })
    // verify the information
    backCoverPage.getInfoText().then((text) => {
      expect(getTextContent(text[0])).to.equal(pt.info.title)
      expect(getTextContent(text[1])).to.equal('')
      expect(getTextContent(text[2])).to.equal(pt.info.msg)
    })
  })
})
