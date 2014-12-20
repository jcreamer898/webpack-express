"use strict";

import Base from "components/base";

var html = require("components/cards/card.html");

class Card extends Base {
  constructor(options) {
    this.options = options;

    super(options.el, html);
  }

  render() {
    this.el.innerHTML = this.template(this.options);
  }
}

export default Card;