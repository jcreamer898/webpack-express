var html = require("components/alert.html");
var css = require("./alert.scss");
var handlebars = require("handlebars");

function Alert(msg, options) {
    this.message = msg;
    this.options = options;
}

Alert.prototype.render = function() {
    return html;
}

module.exports = Alert;