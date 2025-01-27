/// <reference types="cypress" />
import * as pt from '../../fixtures/pt.json'
import ConfigPage from '../../pages/ConfigPage'
import { getTextContent } from '../../support/utils'

enum ListOfTabs {
    INTRO,
    START,
    THEME,
    WELCOME,
    LOGO,
    BACKGROUND,
    QUICKMENU,
    TERMINAL,
    PUBLISH
}

describe('Agile Tutorial - Config Page tests', () => {
  let configPage: ConfigPage

  beforeEach(() => {
    cy.visit('/configuration-steps-2/')
    configPage = new ConfigPage()
    // verify page has the correct title
    cy.assertPageTitle(pt.configPageTitle)
  })

  it('verify tab titles', () => {
    configPage.getAllTabs().then((titles) => {
       expect(getTextContent(titles[ListOfTabs.INTRO])).to.equal(pt.configTabs.introduction)
       expect(getTextContent(titles[ListOfTabs.START])).to.equal(pt.configTabs.initConfig)
       expect(getTextContent(titles[ListOfTabs.THEME])).to.equal(pt.configTabs.themeDesign)
       expect(getTextContent(titles[ListOfTabs.WELCOME])).to.equal(pt.configTabs.welcomeText)
       expect(getTextContent(titles[ListOfTabs.LOGO])).to.equal(pt.configTabs.logo)
       expect(getTextContent(titles[ListOfTabs.BACKGROUND])).to.equal(pt.configTabs.background)
       expect(getTextContent(titles[ListOfTabs.QUICKMENU])).to.equal(pt.configTabs.quickMenu)
       expect(getTextContent(titles[ListOfTabs.TERMINAL])).to.equal(pt.configTabs.terminalConfig)
       expect(getTextContent(titles[ListOfTabs.PUBLISH])).to.equal(pt.configTabs.publishConfig)
    })
  })

  it('verify tab descriptions', () => {
    configPage.getAllDesc().then((desc) => {
        // there is no description for Introduction, which is why we are doing index - 1
        expect(getTextContent(desc[ListOfTabs.START - 1])).to.equal(pt.configTabs.initConfigDesc)
        expect(getTextContent(desc[ListOfTabs.THEME - 1])).to.equal(pt.configTabs.themeDesignDesc)
        expect(getTextContent(desc[ListOfTabs.WELCOME - 1])).to.equal(pt.configTabs.welcomeTextDesc)
        expect(getTextContent(desc[ListOfTabs.LOGO - 1])).to.equal(pt.configTabs.logoDesc)
        expect(getTextContent(desc[ListOfTabs.BACKGROUND - 1])).to.equal(pt.configTabs.backgrountDesc)
        expect(getTextContent(desc[ListOfTabs.QUICKMENU - 1])).to.equal(pt.configTabs.quickMenuDesc)
        expect(getTextContent(desc[ListOfTabs.TERMINAL - 1])).to.equal(pt.configTabs.terminalConfigDesc)
        expect(getTextContent(desc[ListOfTabs.PUBLISH - 1])).to.equal(pt.configTabs.publishConfigDesc)
    })
  })

  it('verify video sources', () => {
    configPage.getAllVideoSources().then((videos) => {
        expect(videos[ListOfTabs.INTRO]).to.have.attr('src').and.contain('chapter-0-introduction.mp4')
        expect(videos[ListOfTabs.START]).to.have.attr('src').and.contain('chapter-1-start-configuration-3.mp4')
        expect(videos[ListOfTabs.THEME]).to.have.attr('src').and.contain('chapter-2-layout-and-theme-2.mp4')
        expect(videos[ListOfTabs.WELCOME]).to.have.attr('src').and.contain('chapter-3-welcome-text-3.mp4')
        expect(videos[ListOfTabs.LOGO]).to.have.attr('src').and.contain('chapter-4-corporate-logo-3.mp4')
        expect(videos[ListOfTabs.BACKGROUND]).to.have.attr('src').and.contain('chapter-5-background-3.mp4')
        expect(videos[ListOfTabs.QUICKMENU]).to.have.attr('src').and.contain('chapter-6-dock-3.mp4')
        expect(videos[ListOfTabs.TERMINAL]).to.have.attr('src').and.contain('chapter-7-kiosk-settings-3.mp4')
        expect(videos[ListOfTabs.PUBLISH]).to.have.attr('src').and.contain('chapter-8-publish-kiosk-configuration-3.mp4')
    })
  })

  it('verify video note', () => {
    const tabsArray = Object.values(ListOfTabs).filter((value) => typeof value === "string")
    configPage.getAllVideoNotes().then((notes) => {
        // there is no note for Introduction video, which is why we are length - 1
        for (let i = 0; i < tabsArray.length -1; i++) {
            // All video notes have the same text
            expect(getTextContent(notes[i])).to.equal(pt.configTabs.videoFootNote)
        }
    })
  })

  it('verify selected tab is active', () => {
    const tabsArray = Object.values(ListOfTabs).filter((value) => typeof value === "string")
    // select each tab one by one
    for (let tabIndex = 0; tabIndex < tabsArray.length; tabIndex++) {
        configPage.getTabButton(tabIndex).click().and('have.class', 'active')
        configPage.getAllVideoContent(tabIndex).should('have.class', 'active')
        // verify all other tab content are hidden
        for (let i = 0; i < tabsArray.length; i++) {
            if (i != tabIndex) {
                // verify other tabs and video are set to display: none
                configPage.assertContentIsHidden(i)
            }    
        }    
    }
  })
})
