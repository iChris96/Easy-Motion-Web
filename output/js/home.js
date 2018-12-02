"use strict";

var _newNavbar = _interopRequireDefault(require("./newNavbar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = iniciar;

function iniciar() {
  ultimosCalendarios();

  _newNavbar.default.addOptions();

  _newNavbar.default.listenNavBar();
}

function ultimosCalendarios() {
  fetch('https://easy-motion.herokuapp.com/calendars').then(function (response) {
    return response.json();
  }).then(function (data) {
    //console.log(data.data)
    var icons = document.querySelector('.links > article'); //console.log(icons);

    var calendars = data.data;
    var aElement = document.createElement('a');
    var iElement = document.createElement('i');
    iElement.classList.add('box-icon', 'fas', 'fa-calendar-alt');
    var pElement = document.createElement('p');
    pElement.classList.add('box-text');

    for (var i = 0; i < 3; i++) {
      var newAelement = aElement.cloneNode(true);
      var newIelement = iElement.cloneNode(true);
      var newPelement = pElement.cloneNode(true);
      var pElementText = document.createTextNode(calendars[i].name);
      newPelement.appendChild(pElementText);
      newAelement.appendChild(newIelement);
      newAelement.appendChild(newPelement);
      icons.appendChild(newAelement);
    }
  });
}