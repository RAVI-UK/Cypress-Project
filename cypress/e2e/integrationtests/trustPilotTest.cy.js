const {timeout} = require("async");
// const cypress = require("cypress");

import trustPilot from '../Pages/trustPilotPage'

        describe('Trust Pilot Sample Test', () => {
            const pilotPage = new trustPilot();
            it('Expand Links Test', () => {
                pilotPage.visitTrustPilotPage();
                pilotPage.scrollDownOnPage();
                pilotPage.expandLinks();

            })
        });