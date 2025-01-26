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

    clickLinkToNextPage(page: string) {
        this.getLinkToNextPage().should('contain.text', page).click()
        this.assertTitle(page)
    }

    clickLinkToPreviousPage(page: string) {
        this.getLinkToPreviousPage().should('contain.text', page).click()
        this.assertTitle(page)
    }

    navigateToStep(step: string){
        cy.get('#menu-container').findByText(step).click()
        cy.get('#menu-container').findByText(step).parent().should('have.class', 'active')
        this.assertTitle(step)
    }

    assertTitle(title: string) {
        this.getNavBar().find('.page-title').should('contain', title)
    }
}

export default Footer