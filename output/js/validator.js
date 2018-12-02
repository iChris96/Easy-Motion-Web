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

  _createClass(Validator, [{
    key: "isMinLength6",
    value: function isMinLength6(x) {
      return x.length < 8;
    }
  }, {
    key: "isMaxLength20",
    value: function isMaxLength20(x) {
      return x.length > 10;
    }
  }, {
    key: "isRequired",
    value: function isRequired(x) {
      return x === undefined || x === null || isNaN(x) || x.length == 0;
    }
  }, {
    key: "mailValidator",
    value: function mailValidator(value) {
      var msg = [];
      if (this.isRequired(value)) msg.push('No es un tipo de dato valido');
      return msg;
    }
  }, {
    key: "passwordValidator",
    value: function passwordValidator(value) {
      var msg = [];
      if (this.isMinLength6(value)) msg.push('Tu contraseña debe tener por lo menos 6 caracteres');
      if (this.isMaxLength20(value)) msg.push('Demaciado larga la contraseña');
      if (this.isRequired(value)) msg.push('No es un tipo de dato valido');
      return msg;
    }
  }, {
    key: "validate",
    value: function validate(x, y) {
      switch (x) {
        case 'email':
          return this.mailValidator(y);
          break;

        case 'password':
          return this.passwordValidator(y);
          break;

        case 2:
          console.log('a is equal to 2.');
          break;

        case 3:
          console.log('a is equal to 3.');
          break;

        case 4:
          console.log('a is equal to 4.');
          break;

        default:
          console.log('I run if no one else is true.');
      }
    }
  }], [{
    key: "test",
    value: function test() {
      console.log('hello woorld');
    }
  }]);

  return Validator;
}();

var _default = new Validator();

exports.default = _default;