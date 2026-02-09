const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tdg7dg',
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },experimentalPromptCommand: true,
  },
});
