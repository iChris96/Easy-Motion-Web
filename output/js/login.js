"use strict";

var _validator = _interopRequireDefault(require("./validator2.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validator = _validator.default; //Traer form

var forms = document.getElementsByClassName('form'); //console.log(forms[0].children);
//recorrer formularios

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = forms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var form = _step.value;
    //items en formularios
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = form.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var item = _step3.value;

        //busca el boton del formulario
        if (item.type == 'submit') {
          item.addEventListener('click', validate, false);
        }
      } //regresa lista de msg error o regresa ok

    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
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

function deleteErrors() {
  var msgErrors = document.getElementsByClassName('error-msg');
  var inputsErrors = document.getElementsByClassName('error');

  while (msgErrors.length > 0) {
    msgErrors[0].parentNode.removeChild(msgErrors[0]);
  }

  for (var i = 0; i < inputsErrors.length; i++) {
    inputsErrors[i].classList.remove('error');
  }
}

function validate(e) {
  var form = e.target.parentNode;
  deleteErrors();
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = form[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;

      if (item.type != 'submit') {
        var msg = _validator.default.validateSomething(item.name, item.value); //si hay errores


        if (msg.length > 0) {
          e.preventDefault(); //añade clase error al input

          item.classList.add('error'); //añade caja de mensajes errres

          var divError = document.createElement('div');
          divError.classList.add('error-msg');
          msg.forEach(function (element) {
            //console.log(element);
            var newErrorMsg = document.createElement('h1');
            var textError = document.createTextNode(element);
            newErrorMsg.appendChild(textError);
            divError.appendChild(newErrorMsg);
          });
          item.parentNode.insertBefore(divError, item.nextSibling);
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}