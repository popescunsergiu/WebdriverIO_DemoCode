"use strict";
let mixin = require('xmultiple');

let Page = require('./page');
let NavigationBar = require('./sections/navigationBar.section');

class GuidePage extends mixin(Page, NavigationBar) {


  open() {
    super.open('guide.html');
  }
}

module.exports = new GuidePage();