class ConfigPage {
    getAllTabs() {
        return cy.get('.tabs-buttons').find('.tab-title')
    }

    getTabButton(index: number) {
        return cy.get('.tabs-buttons > .tab-btn').eq(index)
    }

    getAllDesc() {
        return cy.get('.tabs-buttons').find('.tab-desc')
    }

    getAllVideoSources() {
        return cy.get('.tabs-content').find('source')
    }

    getAllVideoContent(index: number) {
        return cy.get('.tabs-content > .tab').eq(index)
    }

    getAllVideoNotes() {
        return cy.get('.tabs-content').find('.text-in')
    }

    assertContentIsHidden(index: number) {
        cy.get('.tabs-buttons').find('.tab-text').eq(index).should('not.be.visible')
        cy.get('.tabs-content').find('.tab-text').eq(index).should('not.be.visible')
    }
}

export default ConfigPage