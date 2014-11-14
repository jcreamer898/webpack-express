var Handlebars = require("handlebars"),
    fs = require("fs"),
    path = require("path");

var html = fs.readFileSync(path.join(__dirname, "../../templates/components/alert.html"));

module.exports = function(type, message) {
  type = Handlebars.Utils.escapeExpression(type);
  message  = Handlebars.Utils.escapeExpression(message);
  
  var template = Handlebars.compile( html.toString() );

  var result = template({
    type: type,
    message: message
  });

  return new Handlebars.SafeString(result);
};