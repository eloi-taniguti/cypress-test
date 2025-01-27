declare namespace Cypress {
    interface Chainable {
      /**
       * This command will assert the page title displayed on the page footer.
       * @param title - string with expected title.
       */
      assertPageTitle(title: string): Chainable<Element>
      }
}