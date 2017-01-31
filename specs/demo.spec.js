let homePage = require('../pages/home.page');
let guidePage = require('../pages/guide.page');

describe('Demo Search', function () {

  it('Open Home Page', function () {
    homePage.open();
  });

  it('Search on Home Page', function () {
    homePage.doSearch('Page Object');
    homePage.goToSearchResult();
  });

  it('Validate result', function () {
    browser.pause(5000);
  });

  it('Search on Guide Page', function () {
    guidePage.doSearch('wdio');
    guidePage.goToSearchResult();
  });

  it('Validate result', function () {
    browser.pause(5000);
  });

});
