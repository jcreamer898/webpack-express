var html = require("components/alert.html");
var css = require("./alert.scss");
var handlebars = require("handlebars/dist/handlebars");

// function Alert(el, type, message) {
//   this.el = el;
//   this.type = type;
//   this.message = message;
//   this.template = handlebars.compile(html);

//   this.render();
// }

// Alert.prototype.render = function() {
//   this.el.innerHTML = this.template({
//     type: this.type,
//     message: this.message
//   });
// };

// module.exports = Alert;


class Alert {
  constructor(el, type, message) {
    this.el = el;
    this.type = type;
    this.message = message;
    this.template = handlebars.compile(html);

    this.render();
  }

  render() {
    this.el.innerHTML = this.template({
      type: this.type,
      message: this.message
    });
  }
}

export default Alert