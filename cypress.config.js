const { defineConfig } = require("cypress");
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    apiKey: 'ebac-shop_HB_lTc8FR-aHs4xEAX7sW_DPgzntnnIApFqyTCDSE60QPosvh6uh5Lg1Gmdb2Udi',
    endpoint: 'https://demo.reportportal.io/api/v1',
    project: 'rafaelmmorais_personal',
    launch: 'Testes em cypress',
    description: 'teste da ebac shop',
    attributes: [
      {
        key: 'attributeKey',
        value: 'attributeValue',
      },
      {
        value: 'anotherAttributeValue',
      },
    ],
  },
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
    baseUrl: "http://lojaebac.ebaconline.art.br/"
  },
});
