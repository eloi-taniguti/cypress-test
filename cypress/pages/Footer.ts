import * as pt from '../fixtures/pt.json'

class Footer {

    getLinkToNextPage() {
        return cy.get('#buttons-container > .next-link > a')
    }

    getLinkToPreviousPage() {
        return cy.get('#buttons-container > .prev-link > a')
    }

    getNavBar() {
        return cy.get('#nav')
    }
    
    getShareButton() {
        return cy.get('.nav-link > .icon')
    }

    getShareLinkOptions() {
        return cy.get('.sub-links-in').find('a')
    }

    getShareCopyOption() {
        return cy.get('.sub-links-in').find('span')
    }

    clickLogo() {
        cy.get('.logo').click()
        this.assertTitle(pt.footer.coverPage)
    }

    clickMenuButton() {
        cy.get('#menu-btn').findByText('Menu').click()
    }

    clickLinkToNextPage(page: 'Etapas de configuração' | 'Contracapa') {
        this.getLinkToNextPage().should('contain.text', page).click()
        this.assertTitle(page)
    }

    clickLinkToPreviousPage(page: 'Etapas de configuração' | 'Página inicial') {
        this.getLinkToPreviousPage().should('contain.text', page).click()
        this.assertTitle(page)
    }

    navigateToInitialPage(){
        cy.get('#menu-container').findByText(pt.footer.coverPage).click()
        cy.get('#menu-container').findByText(pt.footer.coverPage).parent().should('have.class', 'active')
        this.assertTitle(pt.footer.coverPage)
    }

    navigateToConfigSteps(){
        cy.get('#menu-container').findByText(pt.footer.configPage).click()
        cy.get('#menu-container').findByText(pt.footer.configPage).parent().should('have.class', 'active')
        this.assertTitle(pt.footer.configPage)
    }

    navigateToBackCover(){
        cy.get('#menu-container').findByText(pt.footer.backCoverPage).click()
        cy.get('#menu-container').findByText(pt.footer.backCoverPage).parent().should('have.class', 'active')
        this.assertTitle(pt.footer.backCoverPage)
    }

    assertTitle(title: string) {
        this.getNavBar().find('.page-title').should('contain', title)
    }
}

export default Footer