/// <reference types="cypress" />

import LoginPage from '../../pages/Login'
import * as users from '../../fixtures/users.json'

describe('Login page tests', () => {
  let login : LoginPage
  beforeEach(() => {
    cy.visit('/')
    login = new LoginPage()
  })

  it('TC001_successful_login', () => {
    login.loginAs(users.validUser.username, users.validUser.password)
    login.assertPageTitle('Invoice List')
  })

  users.invalidUsers.forEach((user) => {
    it(`TC002_invalid_login - ${user.username}`, () => {
      login.loginAs(user.username, user.password)
      login.assertErrorMessage('Wrong username or password.')  
    })
  })

})
