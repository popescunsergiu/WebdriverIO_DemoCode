"use strict";

class NavigationBarSection {
  constructor() {
  }

  get search() { return browser.element('//div[@id="docsearch"]//input'); }

  get searchResult() {return browser.element('//div[@class="algolia-docsearch-suggestion--wrapper"]'); }

  doSearch(searchCriteria) {
    this.search.setValue(searchCriteria);
    browser.pause(3000);
  }

  goToSearchResult() {
    this.searchResult.click();
  }

}

module.exports = NavigationBarSection;
