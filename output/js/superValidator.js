"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Validator =
/*#__PURE__*/
function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }

  _createClass(Validator, null, [{
    key: "functionsarray",
    value: function functionsarray() {
      return {
        isMaxLength30: {
          tipo: ['name'],
          metodo: function metodo(x) {
            return x.length > 30;
          },
          msg: 'Es mayor a 30 caracteres'
        },
        isMinLength6: {
          tipo: ['newPassword'],
          metodo: function metodo(x) {
            return x.length < 6;
          },
          msg: 'Es menor a 6 caracteres'
        },
        isMail: {
          tipo: ['email'],
          metodo: function metodo(x) {
            var expresionMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return !expresionMail.test(x);
          },
          msg: 'No es un email valido'
        },
        isWord: {
          tipo: ['name'],
          metodo: function metodo(x) {
            var expresionWord = /[a-zA-ZñÑ]{3,}/;
            return !expresionWord.test(x);
          },
          msg: 'No es una palabra valida'
        },
        isVacio: {
          tipo: ['email', 'password', 'weight', 'height', 'name', 'mobile'],
          metodo: function metodo(x) {
            return x.length == 0;
          },
          msg: 'Ingrese los datos'
        },
        isWeight: {
          tipo: ['weight'],
          metodo: function metodo(x) {
            return x.length > 3 || Number(x) < 0 || Number(x) > 250;
          },
          msg: 'Peso entre 0 y 250kg'
        },
        isHeight: {
          tipo: ['height'],
          metodo: function metodo(x) {
            return x.length > 3 || Number(x) < 0 || Number(x) > 300;
          },
          msg: 'Altura entre 0 y 300 CM'
        },
        isSpace: {
          tipo: ['password', 'name', 'mobile'],
          metodo: function metodo(x) {
            return x[0] == ' ';
          },
          msg: 'No puede iniciar con espacio'
        },
        isMobile: {
          tipo: ['mobile'],
          metodo: function metodo(x) {
            return x.length != 10;
          },
          msg: 'Ingrese un numero de 10 digitos'
        }
      };
    }
  }, {
    key: "validateSomething",
    value: function validateSomething(type, data) {
      var superMsg = []; //console.log(type);
      //console.log(data);

      var bigArray = Validator.functionsarray();

      for (var obj in bigArray) {
        var elements = bigArray[obj];

        if (elements.tipo.indexOf(type) != -1) {
          if (elements.metodo(data)) {
            superMsg.push(elements.msg);
          }
        } //console.log('primera vuelta');

      }

      return superMsg;
    }
  }, {
    key: "deleteErrors",
    value: function deleteErrors() {
      var msgErrors = document.getElementsByClassName('error-msg');

      while (msgErrors.length > 0) {
        msgErrors[0].parentNode.removeChild(msgErrors[0]);
      }

      document.querySelectorAll('.error').forEach(function (a) {
        a.classList.remove('error');
      });
    }
  }, {
    key: "validate",
    value: function validate(e) {
      var form = e.target.parentNode;
      var msg; //delete class error

      Validator.deleteErrors(); //for input on form

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = form[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          //ignorar el submit input
          if (item.type != 'submit') {
            //retorna array de msgs de un input
            msg = Validator.validateSomething(item.name, item.value); //si hay errores

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
        } //si ya no hay errores

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
  }, {
    key: "listen2",
    value: function listen2() {
      var forms = document.getElementsByClassName('form');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = forms[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var form = _step2.value;
          //items en formularios
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = form.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var item = _step3.value;

              //busca el boton del formulario
              if (item.type == 'submit') {
                item.addEventListener('click', Validator.validate, false);
              }
            }
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
  }, {
    key: "listen",
    value: function listen(form) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = form.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var item = _step4.value;

          //busca el boton del formulario
          if (item.type == 'submit') {
            item.addEventListener('click', Validator.validate, false);
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: "haiteva",
    value: function haiteva(x) {
      console.log('x: ', x);
    }
  }]);

  return Validator;
}();

var _default = Validator;
exports.default = _default;