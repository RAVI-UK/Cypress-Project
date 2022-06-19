class trustPilotPage {

    visitTrustPilotPage() {
        return cy.visit('https://uk.trustpilot.com/review/c19testing.co.uk');
    }

    scrollDownOnPage() {
        cy.log('Accepting Cookies...')
        cy.get('#onetrust-reject-all-handler').click();
        cy.scrollTo(0, 5000);
    }

    expandLinks() {
        cy.log('Expanding Links...')
        cy.get('.styles_experienceCard__pR367 > .typography_h3___R1NA').scrollIntoView();
        cy.get('div[class="paper_paper__1PY90 card_card__lQWDv styles_sideColumnCard__eyHWa styles_experienceCard__pR367"] div svg').each(($el) => {
            cy.wait(150)
            cy.wrap($el).click({force: true})
        })
    }

}

export default trustPilotPage;