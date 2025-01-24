import * as pt from '../fixtures/pt.json'

class InitialPage {
    navigateToConfigSteps(){
        cy.get('.button').findByText(pt.buttons.config).click()
        cy.assertPageTitle(pt.configPageTitle)
    }
}

export default InitialPage