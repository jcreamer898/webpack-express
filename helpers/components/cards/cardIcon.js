"use strict";

module.exports = function(kind) {
  return kind === "need-to-know" ? "information" : kind;
};