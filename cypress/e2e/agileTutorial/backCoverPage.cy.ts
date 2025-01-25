/// <reference types="cypress" />
import * as pt from '../../fixtures/pt.json'
import BackCoverPage from '../../pages/BackCoverPage'

describe('Agile Tutorial - Back Cover Page tests', () => {
  let backCoverPage: BackCoverPage

  beforeEach(() => {
    cy.visit('/back-cover-7/')
    backCoverPage = new BackCoverPage()
  })

  it('verify page elements', () => {
    backCoverPage.getCenterText()
      .should('have.attr', 'href', pt.url)
      .and('have.text', pt.urlLabel)

    backCoverPage.getAddressText().then((text) => {
      expect(text[0].innerText).to.equal(pt.address.name)
      expect(text[1].innerText).to.equal(pt.address.street)
      expect(text[2].innerText).to.equal(pt.address.city)
      expect(text[3].innerText).to.equal(pt.address.state)
      expect(text[4].innerText).to.equal(pt.address.country)
    })

    backCoverPage.getInfoText().then((text) => {
      expect(text[0].innerText).to.equal(pt.info.title)
      expect(text[1].innerText).to.equal('')
      expect(text[2].innerText).to.equal(pt.info.msg)
    })
  })
})
