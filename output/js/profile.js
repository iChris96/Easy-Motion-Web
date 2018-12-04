"use strict";

var _newNavbar = _interopRequireDefault(require("./newNavbar.js"));

var _api = _interopRequireDefault(require("./api.js"));

var _cookie = _interopRequireDefault(require("./cookie.js"));

var _superValidator = _interopRequireDefault(require("./superValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

window.onload = iniciar;

function iniciar() {
  _cookie.default.noSession();

  _newNavbar.default.addOptions();

  _newNavbar.default.listenNavBar();

  getUser();
  var editProfile = document.getElementById('editProfileButton');
  var closeButtonProfile = document.getElementsByClassName('close-button')[0];
  var editProfileModal = document.getElementsByClassName("modal")[0];
  editProfile.addEventListener("click", function () {
    editProfileModal.classList.toggle("show-modal");
  });
  closeButtonProfile.addEventListener("click", function () {
    editProfileModal.classList.toggle("show-modal");
  });
  var addProgress = document.getElementById('addProgressButton');
  var closeButtonProgress = document.getElementsByClassName('close-button')[1];
  var addProgressModal = document.getElementsByClassName("modal")[1];
  addProgress.addEventListener("click", function () {
    addProgressModal.classList.toggle("show-modal");
  });
  closeButtonProgress.addEventListener("click", function () {
    addProgressModal.classList.toggle("show-modal");
  });
  var forms = document.getElementsByClassName('form');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var form = _step.value;

      _superValidator.default.listen(form);

      form.addEventListener('submit', function (e) {
        e.preventDefault(); //Saber cual form fue

        if (form.id == "editProfile") {
          edit();
        } else {
          add();
        }
      }, false);
    };

    for (var _iterator = forms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
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
      //console.log(data);
      paintUser(data.data.name, data.data.mobile, data.data.email);
      paintEditModal(data.data.name, data.data.mobile, data.data.email);
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

function paintEditModal(name, mobile, email) {
  var inputsEditProfile = document.getElementsByClassName('inputs')[0].children;
  inputsEditProfile[0].value = name;
  inputsEditProfile[1].value = mobile;
  inputsEditProfile[2].value = email;
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
  var calendars = document.getElementsByClassName('calendars')[0]; //console.log(calendars);

  arrayCalendars.forEach(function (element) {
    //element.id
    //element.name
    //console.log(element);
    var aElement = document.createElement('a');
    aElement.classList.add('calendar');
    var hElement = document.createElement('h4');
    var text = document.createTextNode(element.name);
    aElement.href = './calendar.html';
    hElement.appendChild(text);
    aElement.appendChild(hElement); //  console.log(aElement);

    calendars.appendChild(aElement);
  });
}

function edit() {
  return _edit.apply(this, arguments);
}

function _edit() {
  _edit = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var inputsEditProfile, name, mobile, email, updatedUser, modalEdit;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inputsEditProfile = document.getElementsByClassName('inputs')[0].children;
            name = inputsEditProfile[0].value;
            mobile = inputsEditProfile[1].value;
            email = inputsEditProfile[2].value;
            _context.next = 6;
            return _api.default.editProfile(name, mobile, email);

          case 6:
            updatedUser = _context.sent;

            if (updatedUser.status == 200) {
              //cerrar modal
              modalEdit = document.getElementsByClassName("modal")[0];
              modalEdit.classList.toggle("show-modal"); //mod titulos

              paintUser(name, mobile, email);
            }

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _edit.apply(this, arguments);
}

function add() {
  return _add.apply(this, arguments);
}

function _add() {
  _add = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var inputsAddProgress, weight, height, newProgress, modalProgress, date, progress, arrayProgress;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            inputsAddProgress = document.getElementsByClassName('inputs')[1].children;
            weight = inputsAddProgress[0].value;
            height = inputsAddProgress[1].value;
            _context2.next = 5;
            return _api.default.addProgress(weight, height);

          case 5:
            newProgress = _context2.sent;

            if (newProgress.status == 201) {
              //cerrar modal
              modalProgress = document.getElementsByClassName("modal")[1];
              modalProgress.classList.toggle("show-modal"); //mod titulos

              date = getTime();
              progress = {
                date: date,
                weight: weight,
                height: height
              };
              arrayProgress = [progress];
              paintProgress(arrayProgress);
            }

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _add.apply(this, arguments);
}

function getTime() {
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 1).toString();
  var cero = '0';
  var day = cero + date.getDate().toString();
  return "".concat(year, "-").concat(month, "-").concat(day);
}