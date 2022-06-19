class wikePage {

    visitWikiPage() {
        return cy.visit('https://en.wikipedia.org/wiki/Wikipedia');
    }

    scrollDownOnPage() {
        cy.scrollTo(0, 5000);
    }

    clickExternalLink() {
        cy.get('.tocsection-67 > a > .toctext').click()
        cy.get('.official-website > .url > .external').click()
    }

    selectTamilLanguage() {
        cy.get('#searchLanguage').select('ta');
    }

    searchTirukural() {
        cy.get('#searchInput').type('tirukuraal')
        cy.get('.pure-button').click()
    }

    fail() {
        cy.get('.pure-button').click()
    }
}

export default wikePage;