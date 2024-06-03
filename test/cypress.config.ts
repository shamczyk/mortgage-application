const { defineConfig } = require("cypress");
module.exports = defineConfig({
  "viewportHeight": 800,
  "viewportWidth": 1200,
  "experimentalSourceRewriting": true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseURL": "https://www.zillow.com/mortgage-calculator/?_d=true",
  },
});