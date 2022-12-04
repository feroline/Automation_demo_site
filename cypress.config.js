const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://demo.automationtesting.in/Register.html',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
