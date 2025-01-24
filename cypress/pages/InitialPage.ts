class InitialPage {
    navigateToConfigSteps(){
        cy.get('.button').findByText('Configuração').click()
        cy.assertPageTitle('Configure a tela do seu terminal AGILE')
    }
}

export default InitialPage