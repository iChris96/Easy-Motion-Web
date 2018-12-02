"use strict";

var _newNavbar = _interopRequireDefault(require("./newNavbar.js"));

var _api = _interopRequireDefault(require("./api.js"));

var _cookie = _interopRequireDefault(require("./cookie.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = iniciar;

function iniciar() {
  _cookie.default.noSession();

  _newNavbar.default.addOptions();

  _newNavbar.default.listenNavBar();

  getUser();
}

function getUser() {
  var userId = _cookie.default.getCookie('userId');

  var userToken = _cookie.default.getCookie('userToken');

  fetch("https://easy-motion.herokuapp.com/users/".concat(userId), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(userToken)
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    //console.log('data=',data);
    if (data.status == 200) {
      paintUser(data.data.name, data.data.mobile, data.data.email);
      getProgress();
      getCalendars();
    }
  });
}

function paintUser(name, mobile, email) {
  var nameh5 = document.getElementById('name');
  var mobileh5 = document.getElementById('mobile');
  var emailh5 = document.getElementById('email');
  nameh5.innerHTML = "<i class=\"fas fa-user\"></i>".concat(name);
  mobileh5.innerHTML = "<i class=\"fa fa-mobile\"></i>".concat(mobile);
  emailh5.innerHTML = "<i class=\"fa fa-envelope\"></i>".concat(email);
}

function getProgress() {
  var userId = _cookie.default.getCookie('userId');

  var userToken = _cookie.default.getCookie('userToken');

  fetch("https://easy-motion.herokuapp.com/users/".concat(userId, "/progress"), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(userToken)
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    //console.log('data=',data);
    if (data.status == 200) {
      paintProgress(data.data);
    }
  });
}

function paintProgress(arrayProgress) {
  var tBody = document.getElementsByClassName('rowgroup')[1]; //console.log('array: ',arrayProgress);

  arrayProgress.forEach(function (element) {
    var trElement = document.createElement('tr');
    trElement.classList.add('row');
    var tdFecha = document.createElement('td');
    tdFecha.classList.add('cell');
    var textFecha = document.createTextNode(element.date.slice(0, 10));
    tdFecha.appendChild(textFecha);
    var tdWeight = document.createElement('td');
    tdWeight.classList.add('cell');
    var textWeight = document.createTextNode(element.weight);
    tdWeight.appendChild(textWeight);
    var tdHeight = document.createElement('td');
    tdHeight.classList.add('cell');
    var textHeight = document.createTextNode(element.height);
    tdHeight.appendChild(textHeight);
    trElement.appendChild(tdFecha);
    trElement.appendChild(tdWeight);
    trElement.appendChild(tdHeight);
    tBody.appendChild(trElement);
  });
}

function getCalendars() {
  var userId = _cookie.default.getCookie('userId');

  var userToken = _cookie.default.getCookie('userToken');

  fetch("https://easy-motion.herokuapp.com/users/".concat(userId, "/calendars"), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(userToken)
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    //console.log('data=',data);
    if (data.status == 200) {
      paintCalendars(data.data);
    }
  });
}

function paintCalendars(arrayCalendars) {
  var calendars = document.getElementsByClassName('calendars')[0];
  console.log(calendars);
  arrayCalendars.forEach(function (element) {
    //element.id
    //element.name
    console.log(element);
    var aElement = document.createElement('a');
    aElement.classList.add('calendar');
    var hElement = document.createElement('h4');
    var text = document.createTextNode(element.name);
    aElement.href = './calendar.html';
    hElement.appendChild(text);
    aElement.appendChild(hElement);
    console.log(aElement);
    calendars.appendChild(aElement);
  });
}