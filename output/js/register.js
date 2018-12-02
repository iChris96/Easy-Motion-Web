"use strict";

var _superValidator = _interopRequireDefault(require("./superValidator.js"));

var _newNavbar = _interopRequireDefault(require("./newNavbar.js"));

var _api = _interopRequireDefault(require("./api.js"));

var _cookie = _interopRequireDefault(require("./cookie.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validator = _superValidator.default;
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
        register();
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

function register() {
  var inputs = document.getElementsByClassName('inputs')[0].children;
  var name = inputs[0].value;
  var mobile = inputs[1].value;
  var weight = inputs[2].value;
  var height = inputs[3].value;
  var email = inputs[4].value;
  var password = inputs[5].value;

  _api.default.register(name, mobile, weight, height, email, password);
}