/// <reference types="cypress" />
import * as pt from '../../fixtures/pt.json'
import ConfigPage from '../../pages/ConfigPage'
import { replaceWhiteSpace } from '../../support/utils'

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
    cy.assertPageTitle(pt.configPageTitle)
  })

  it('verify tab titles', () => {
    configPage.getAllTabs().then((titles) => {
       expect(titles[ListOfTabs.INTRO].innerText).to.equal(pt.configTabs.introduction)
       expect(replaceWhiteSpace(titles[ListOfTabs.START].innerText)).to.equal(pt.configTabs.initConfig)
       expect(replaceWhiteSpace(titles[ListOfTabs.THEME].innerText)).to.equal(pt.configTabs.themeDesign)
       expect(titles[ListOfTabs.WELCOME].innerText).to.equal(pt.configTabs.welcomeText)
       expect(titles[ListOfTabs.LOGO].innerText).to.equal(pt.configTabs.logo)
       expect(titles[ListOfTabs.BACKGROUND].innerText).to.equal(pt.configTabs.background)
       expect(titles[ListOfTabs.QUICKMENU].innerText).to.equal(pt.configTabs.quickMenu)
       expect(titles[ListOfTabs.TERMINAL].innerText).to.equal(pt.configTabs.terminalConfig)
       expect(replaceWhiteSpace(titles[ListOfTabs.PUBLISH].innerText)).to.equal(pt.configTabs.publishConfig)
    })
  })

  it('verify tab descriptions', () => {
    configPage.getAllDesc().then((desc) => {
        // there is no description for Introduction, which is why we are doing index - 1
        expect(replaceWhiteSpace(desc[ListOfTabs.START - 1].innerText.trim())).to.equal(pt.configTabs.initConfigDesc)
        expect(replaceWhiteSpace(desc[ListOfTabs.THEME - 1].innerText.trim())).to.equal(pt.configTabs.themeDesignDesc)
        expect(replaceWhiteSpace(desc[ListOfTabs.WELCOME - 1].innerText.trim())).to.equal(pt.configTabs.welcomeTextDesc)
        expect(replaceWhiteSpace(desc[ListOfTabs.LOGO - 1].innerText.trim())).to.equal(pt.configTabs.logoDesc)
        expect(replaceWhiteSpace(desc[ListOfTabs.BACKGROUND - 1].innerText.trim())).to.equal(pt.configTabs.backgrountDesc)
        expect(replaceWhiteSpace(desc[ListOfTabs.QUICKMENU - 1].innerText.trim())).to.equal(pt.configTabs.quickMenuDesc)
        expect(replaceWhiteSpace(desc[ListOfTabs.TERMINAL - 1].innerText.trim())).to.equal(pt.configTabs.terminalConfigDesc)
        expect(replaceWhiteSpace(desc[ListOfTabs.PUBLISH - 1].innerText.trim())).to.equal(pt.configTabs.publishConfigDesc)
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
            expect(replaceWhiteSpace(notes[i].innerText.trim())).to.equal(pt.configTabs.videoFootNote)
        }
    })
  })

  it('verify selected tab is active', () => {
    const tabsArray = Object.values(ListOfTabs).filter((value) => typeof value === "string")
    // select each tab one by one
    for (let tab = 0; tab < tabsArray.length; tab++) {
        configPage.getTabButton(tab).click().and('have.class', 'active')
        configPage.getAllVideoContent(tab).should('have.class', 'active')

        // verify all other tab content are hidden
        for (let i = 0; i < tabsArray.length; i++) {
            if (i != tab) {
                // verify other tabs and video are set to display: none
                configPage.assertContentIsHidden(i)
            }    
        }    
    }
  })
})
