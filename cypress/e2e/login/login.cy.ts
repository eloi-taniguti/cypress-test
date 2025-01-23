/// <reference types="cypress" />

import LoginPage from '../../pages/Login'

const invalid_credentials = [
  {
      'username': 'Demouser',
      'password': 'abc123'
  },
  {
      'username': 'demouser_',
      'password': 'xyz'
  },
  {
      'username': 'demouser',
      'password': 'nanana'
  }
]

describe('Login page tests', () => {
  let login : LoginPage
  beforeEach(() => {
    cy.visit('/')
    login = new LoginPage()
  })

  it('TC001_successful_login', () => {
    login.loginAs('demouser', 'abc123')
    login.assertPageTitle('Invoice List')
  })

  invalid_credentials.forEach((user) => {
    it(`TC002_invalid_login - ${user.username}`, () => {
      login.loginAs(user.username, user.password)
      login.assertErrorMessage('Wrong username or password.')  
    })
  })

})
