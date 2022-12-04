///<reference types="cypress" />
/**
 * 
 * @type {Cypress.PluginConfig}
 */
 module.exports = (on, config) => {
    // https://docs.cypress.io/api/plugins/after-run-api
    
    require('@cypress/code-coverage/task')(on, config);

    on('after:run', (results) => {
        return require('cypress-sonarqube-reporter/mergeReports')(results, {
        mergeFileName: "sonar.xml"
        })
    })
       

    return config;
};