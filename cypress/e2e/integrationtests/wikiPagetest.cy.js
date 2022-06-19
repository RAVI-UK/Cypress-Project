const {timeout} = require("async");
// const cypress = require("cypress");

import wikiPage from '../Pages/wikiPage'

        describe('WikiPage Sample Test', () => {
            const homePage = new wikiPage();
            it('passes', () => {
                homePage.visitWikiPage();
                homePage.scrollDownOnPage();
                homePage.clickExternalLink();
                homePage.selectTamilLanguage();
                homePage.searchTirukural();
            })
        }),
        describe('Fail Sample Test', () => {
            it('fail test', () => {
                //homePage.fail();
            })
        });
