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
    footer.clickMenuButton()
    footer.navigateToConfigSteps()

    footer.clickMenuButton()
    footer.navigateToBackCover()

    footer.clickMenuButton()
    footer.navigateToInitialPage()
  })

  it('click on logo navigates to initial page', () => {
    footer.clickMenuButton()
    footer.navigateToConfigSteps()

    footer.clickLogo()

    footer.clickMenuButton()
    footer.navigateToBackCover()

    footer.clickLogo()
  })

  it('navigates via Previous and Next buttons', () => {
    footer.getNavBar().realHover()
    footer.clickLinkToNextPage('Etapas de configuração')

    footer.clickLinkToNextPage('Contracapa')
    footer.getLinkToNextPage().should('not.exist')
    footer.clickLinkToPreviousPage('Etapas de configuração')

    footer.clickLinkToPreviousPage('Página inicial')
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
