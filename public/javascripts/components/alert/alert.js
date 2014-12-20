"use strict";

import Base from "components/base";

var html = require("components/alert.html");

require("./alert.scss");

class Alert extends Base {
  constructor(options) {
    this.type = options.type;
    this.message = options.message;

    super(options.el, html);
  }

  render() {
    this.el.innerHTML = this.template({
      type: this.type,
      message: this.message
    });
  }
}

export default Alert;