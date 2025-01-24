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
        this.assertTitle('Página inicial')
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
        cy.get('#menu-container').findByText('Página inicial').click()
        cy.get('#menu-container').findByText('Página inicial').parent().should('have.class', 'active')
        this.assertTitle('Página inicial')
    }

    navigateToConfigSteps(){
        cy.get('#menu-container').findByText('Etapas de configuração').click()
        cy.get('#menu-container').findByText('Etapas de configuração').parent().should('have.class', 'active')
        this.assertTitle('Etapas de configuração')
    }

    navigateToBackCover(){
        cy.get('#menu-container').findByText('Contracapa').click()
        cy.get('#menu-container').findByText('Contracapa').parent().should('have.class', 'active')
        this.assertTitle('Contracapa')
    }

    assertTitle(title: string) {
        this.getNavBar().find('.page-title').should('contain', title)
    }
}

export default Footer