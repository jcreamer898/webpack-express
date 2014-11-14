var Alert = require("./components/alert/alert.js").default;

var alertMe = document.querySelectorAll(".alert-me")[0];

var alert = new Alert(alertMe, 'warning', 'Watchu talkin bout wills... (client)');

module.exports = {
    Alert: Alert
};