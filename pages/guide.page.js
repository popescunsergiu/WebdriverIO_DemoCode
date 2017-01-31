// home.page.js
"use strict";
let mixin = require('xmultiple');

let Page = require('./page');
let NavigationBar = require('./sections/navigationBar.section');

class GuidePage extends mixin(Page, NavigationBar) {


  open() {
    super.open('guide.html');
  }

  getTitle() {
    this.title.getText();
  }
}

module.exports = new GuidePage();