class LoginPage {
    readonly inputName: Cypress.Chainable
    readonly inputPassword: Cypress.Chainable
    readonly loginButton: Cypress.Chainable

    constructor() {
        this.inputName = cy.get('input[name="username"]')
        this.inputPassword = cy.get('input[name="password"]')
        this.loginButton = cy.get('#btnLogin')
    }

    loginAs(user: string, psw: string){
        this.inputName.type(user)
        this.inputPassword.type(psw)
        this.loginButton.click()
    }

    assertPageTitle(title: string) {
        cy.get('h2').should('contain', title)
    }

    assertErrorMessage(msg: string) {
        cy.get('div[role="alert"]').contains(msg)
    }
}

export default LoginPage