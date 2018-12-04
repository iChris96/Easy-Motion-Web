"use strict";

var _superValidator = _interopRequireDefault(require("./superValidator.js"));

var _newNavbar = _interopRequireDefault(require("./newNavbar.js"));

var _cookie = _interopRequireDefault(require("./cookie.js"));

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
        login();
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

function login() {
  var inputs = document.getElementsByClassName('inputs')[0].children;
  var email = inputs[0].value;
  var password = inputs[1].value;
  fetch('https://easy-motion.herokuapp.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then(function (response) {
    //console.log('response =', response);
    return response.json();
  }).then(function (data) {
    if (data.status == 200) {
      //console.log(data);
      exito(data.data.userId, data.data.token, 'Juaquin', data.data.userRole);
    } else {
      invalido(inputs[0], inputs[1]);
    } //console.log('data = ', data);
    //console.log('token= ', data.data.token);
    //console.log('ok:', data.status);
    //console.log(typeof(data.status));
    //console.log('msg:', data.msg);

  }).catch(function (err) {
    console.error(err);
  });
}

function exito(userId, userToken, userName, userRole) {
  var nowTime = new Date();
  nowTime.setTime(nowTime.getTime() + 25 * 60 * 1000); // in milliseconds

  document.cookie = "userId=".concat(userId, ";path=/;expires=").concat(nowTime.toGMTString(), ";");
  document.cookie = "userToken=".concat(userToken, ";path=/;expires=").concat(nowTime.toGMTString(), ";");
  document.cookie = "userName=".concat(userName, ";path=/;expires=").concat(nowTime.toGMTString(), ";");
  document.cookie = "userRole=".concat(userRole, ";path=/;expires=").concat(nowTime.toGMTString(), ";");
  console.log('exito');
  window.location.replace("./home.html"); //window.location.replace("file:///home/chrislap/Dropbox/Easy-Motion-Web/src/home.html");
}

function invalido(emailInput, passInput) {
  //error a inputs
  passInput.classList.add('error');
  emailInput.classList.add('error'); //preparar msg y colocarlo al final

  var divPassError = document.createElement('div');
  divPassError.classList.add('error-msg');
  var h1Error = document.createElement('h1');
  var textError = document.createTextNode('Contraseña o correo invalido');
  h1Error.appendChild(textError);
  divPassError.appendChild(h1Error);
  passInput.parentNode.insertBefore(divPassError, passInput.nextSibling);
}