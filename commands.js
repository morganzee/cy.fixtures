// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//<reference type="Cypress"./>

//Generic code to allow any item to be typed in and searched for
Cypress.Commands.add("searchAnItem", (item)=> {
    cy.fixture("elements").then((loc) => {
        cy.get(loc.searchBox).should("be.visible").type(item)
    })
})

//Static code to click the search button
Cypress.Commands.add("ClickSearchButton", ()=> {
    cy.fixture("elements").then((loc) => {
        cy.get(loc.searchButton).should("be.visible").click()
    })
})