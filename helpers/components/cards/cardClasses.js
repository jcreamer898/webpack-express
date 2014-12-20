"use strict";

module.exports = function(properties) {
  var classes = [
    "card",
    "js-card",
    "card--" + (properties.short ? "short" : "tall"),
    "card--" + (properties.fixed ? "fixed" : "flexible"),
    "card--" + (properties.cover ? "cover" : "standard"),
    "card--" + (properties.double ? "double" : "single"),
    "card--" + (properties.stubby ? "stubby" : "control"),
    "card--" + (properties.imageUrl ? "has-img" : "no-img"),
    "card--" + (properties.priceTag ? "has-price" : "no-price"),
    "card--" + (properties.authorName || properties.contextLocale || (properties.tags && properties.tags.lpReviewed) ? "has-footer" : "no-footer")
  ];

  if (properties.kind) {
    classes.push("card--" + properties.kind);
  }

  return classes.join(" ");
};