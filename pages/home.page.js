"use strict";
let mixin = require('xmultiple');

let Page = require('./page');
let NavigationBar = require('./sections/navigationBar.section');

class HomePage extends mixin(Page, NavigationBar) {

  get title() { return browser.element('//header/h1'); }

  get description() { return browser.element('//header/h2'); }

  open() {
    super.open('');
  }

  getTitle() {
    this.title.getText();
  }

  getDescription() {
    this.description.getText();
  }

}

module.exports = new HomePage();