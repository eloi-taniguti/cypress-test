class BackCoverPage {
    getCenterText() {
        return cy.get('.text-center > a')
    }

    getAddressText() {
        return cy.get('.text-bottom1 > p')
    }

    getInfoText() {
        return cy.get('.text-bottom2-in > p')
    }
}

export default BackCoverPage