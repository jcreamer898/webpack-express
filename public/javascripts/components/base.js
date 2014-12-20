"use strict";

var handlebars = require("handlebars/dist/handlebars");

class Base {
  constructor(el, html) {
    this.el = el;
    this.html = html;

    this.compile();
    this.render();
  }

  render() {
    // Implement this method
  }

  compile() {
    this.template = handlebars.compile(this.html);
  }
}

export default Base;