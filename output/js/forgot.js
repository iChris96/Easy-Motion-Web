"use strict";

var _superValidator = _interopRequireDefault(require("./superValidator.js"));

var _newNavbar = _interopRequireDefault(require("./newNavbar.js"));

var _cookie = _interopRequireDefault(require("./cookie.js"));

var _api = _interopRequireDefault(require("./api.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = iniciar;

function iniciar() {
  _cookie.default.haveSession();

  _newNavbar.default.addOptions();

  _newNavbar.default.listenNavBar();

  var forms = document.getElementsByClassName('form');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = forms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var form = _step.value;

      _superValidator.default.listen(form);

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        showModal();
      }, false);
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

function showModal() {
  var modal = document.getElementsByClassName("modal")[0];
  modal.classList.add('show-modal');
  sendRecoverMail(); //setTimeout(function(){location.href="./home.html"} , 4000);
}

function sendRecoverMail() {
  var email = document.getElementsByClassName('inputs')[0].children[0].value;

  _api.default.forgot(email);
}