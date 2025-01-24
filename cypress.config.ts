import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://digital.brochure.tkelevator.com/tke/pt-br/brochure/agile-tutorial-flyer-tke-global-pt-br/cover-11/',
  },
  viewportWidth: 1280,
  viewportHeight: 800,
})
