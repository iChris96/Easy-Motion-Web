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
        isMaxLength20: {
          tipo: ['name'],
          metodo: function metodo(x) {
            return x.length > 20;
          },
          msg: 'Es mayor a 20 caracteres'
        },
        isMinLength6: {
          tipo: ['password'],
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
        isVacio: {
          tipo: ['email', 'password'],
          metodo: function metodo(x) {
            return x.length == 0;
          },
          msg: 'Ingrese los datos'
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
  }]);

  return Validator;
}();

var _default = Validator;
exports.default = _default;