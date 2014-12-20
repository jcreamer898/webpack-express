"use strict";

var Alert = require("./components/alert/alert.js").default,
    Card = require("./components/card/card.js").default,
    Handlebars = require("handlebars/dist/handlebars"),
    cardClasses = require("components/cards/cardClasses"),
    cardIcon = require("components/cards/cardIcon"),
    cardFooter = require("components/cards/partials/card_footer.html");

Handlebars.registerHelper("cardClasses", cardClasses);
Handlebars.registerHelper("cardIcon", cardIcon);
Handlebars.registerPartial("cards/partials/card_footer", cardFooter);

var alertMe = document.querySelectorAll(".alert-me")[0];

if (alertMe) {
  new Alert({
    el: alertMe,
    type: "warning", 
    message: "Watchu talkin bout wills... (client)"
  });  
}

var card = document.querySelectorAll("lp-card");
var cardStubs = [{
  fixed: true,
  cardClasses: "foo bar",
  url: "/foo",
  linkData: "data-foo=\"bar\"",
  imageUrl: "http://images-resrc.staticlp.com/C=SQ/S=W192,U/C=W192,H185,X0,Y3/O=85/http://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2012/06/6522619971_8f1f2f1d9b.jpg",
  title: "Bazinga",
  kind: "destination",
  contextText: "Clientside card!",
  description: "This card is rendered on the client!"
}, {
  fixed: true,
  cardClasses: "foo bar",
  cover: true,
  url: "/foo",
  linkData: "data-foo=\"bar\"",
  imageUrl: "http://images-resrc.staticlp.com/C=W398,H760,X73,Y0/S=W192,H380/O=85//media.lonelyplanet.com/a/g/hi/t/b430cf0aee8cd39748b32ceba5b7d173-best-places-to-stay-in-venice.jpg",
  title: "Bazinga",
  kind: "destination",
  contextText: "Clientside card!",
  description: "This card is rendered on the client!"
}];

if (card) {
  Array.prototype.forEach.call(card, function(c, i) {
    var data = cardStubs[i % 2];

    data.el = c;

    new Card(data);
  });
}
