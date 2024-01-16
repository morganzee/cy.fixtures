
describe ('My first test', () => {
    beforeEach(() => {
    // Prevent unhandled exceptions from failing the test
        Cypress.on("uncaught:exception", (err, runnable) => {
            // Returning false here prevents Cypress from failing the test on unhandled exceptions
            return false
        })
        cy.visit("/")
    })

    it ('Visit amazon one', () => {
        cy.fixture("elements").then((loc) => {
            cy.get(loc.searchBox).should("be.visible").type(loc.bag)
            cy.get(loc.searchButton).should("exist).").click()
        }) 
           //cy.wait(5000)
    })

    it ('visit amazon two', () => {
        cy.fixture("elements").then((loc) => {
            cy.get(loc.searchBox).type(loc.iphone)
            cy.get(loc.searchButton).click()
        })
     })
     
    it ('visit amazon three', () => {
        cy.fixture("elements").then((loc) => {
            cy.get(loc.searchBox).type(loc.sneakers)
            cy.get(loc.searchButton).click()
        }) 
    })

})
