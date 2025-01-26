/// <reference types="cypress" />
import * as pt from '../../fixtures/pt.json'
import Footer from '../../pages/Footer'

describe('Agile Tutorial - Footer tests', () => {
  let footer: Footer
  beforeEach(() => {
    cy.visit('/cover-11/')
    footer = new Footer()
    footer.assertTitle(pt.footer.coverPage)
  })

  it('navigates via Menu', () => {
    // open menu
    footer.clickMenuButton()
    // go to Init Config page
    footer.navigateToStep(pt.footer.configPage)

    footer.clickMenuButton()
    footer.navigateToStep(pt.footer.backCoverPage)

    footer.clickMenuButton()
    footer.navigateToStep(pt.footer.coverPage)
  })

  it('click on logo navigates to initial page', () => {
    footer.clickMenuButton()
    footer.navigateToStep(pt.footer.configPage)
    // click on Logo to go back to cover page
    footer.clickLogo()

    footer.clickMenuButton()
    footer.navigateToStep(pt.footer.backCoverPage)

    footer.clickLogo()
  })

  it('navigates via Previous and Next buttons', () => {
    footer.getNavBar().realHover()
    // click on Next button with Config page label
    footer.clickLinkToNextPage(pt.footer.configPage)
    // click on Next button with back cover page label
    footer.clickLinkToNextPage(pt.footer.backCoverPage)
    // back cover page should not have Next button
    footer.getLinkToNextPage().should('not.exist')
    // click on Previous button with Config page label
    footer.clickLinkToPreviousPage(pt.footer.configPage)
    // click on Previous button with Cover page label
    footer.clickLinkToPreviousPage(pt.footer.coverPage)
    // cover page should not have Previous button
    footer.getLinkToPreviousPage().should('not.exist')
  })

  it('assert Share options', () => {
    footer.getShareButton().realHover().click()
    footer.getShareLinkOptions().then((links) => {
        expect(links[0]).to.have.attr('href').and.contain('linkedin')
        expect(links[1]).to.have.attr('href').and.contain('facebook')
        expect(links[2]).to.have.attr('href').and.contain('twitter')
        expect(links[3]).to.have.attr('href').and.contain('mailto')
    })
    footer.getShareCopyOption().should('have.attr', 'data-link')
  })

})
