const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: '2keb6e',
  env: {
    CYPRESS_RECORD_KEY: 'b8339e48-8683-42dd-8303-a64ef256d6bd'
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
