/// <reference types="cypress" />

import Footer from '../../pages/Footer'

describe('Agile Tutorial - Footer tests', () => {
  let footer: Footer
  beforeEach(() => {
    cy.visit('/')
    footer = new Footer()
    footer.assertTitle('Página inicial')
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
        cy.wrap(links[0]).should('have.attr', 'href').and('contain', 'linkedin')
        cy.wrap(links[1]).should('have.attr', 'href').and('contain', 'facebook')
        cy.wrap(links[2]).should('have.attr', 'href').and('contain', 'twitter')
        cy.wrap(links[3]).should('have.attr', 'href').and('contain', 'mailto')
    })
    footer.getShareCopyOption().should('have.attr', 'data-link')
  })

})
