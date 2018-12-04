"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint linebreak-style: [2, "windows"] */
var Cookie =
/*#__PURE__*/
function () {
  function Cookie() {
    _classCallCheck(this, Cookie);
  }

  _createClass(Cookie, null, [{
    key: "getCookie",
    value: function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2) return parts.pop().split(";").shift();
    }
  }, {
    key: "logOut",
    value: function logOut() {
      var exp = "Thu, 01 Jan 1970 00:00:00 UTC";
      var myToken = Cookie.getCookie('userToken');
      console.log(myToken);
      document.cookie = "userToken=;path=/;expires=".concat(exp, ";");
      document.cookie = "userName=;path=/;expires=".concat(exp, ";");
      document.cookie = "userRole=;path=/;expires=".concat(exp, ";");
      fetch('https://easy-motion.herokuapp.com/auth/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(myToken)
        }
      }).then(function (response) {
        if (response.status == 200) {
          console.log('200');
          window.location.href = "./home.html";
        }
      });
      console.log('s');
    }
  }, {
    key: "haveSession",
    value: function haveSession() {
      var myToken = Cookie.getCookie('userToken');

      if (myToken != null) {
        window.location.replace("./home.html");
      }
    }
  }, {
    key: "noSession",
    value: function noSession() {
      var myToken = Cookie.getCookie('userToken');

      if (myToken == null) {
        window.location.replace("./home.html");
      }
    }
  }, {
    key: "exito",
    value: function exito(userToken, userName, userRole) {
      var nowTime = new Date();
      nowTime.setTime(nowTime.getTime() + 5 * 60 * 1000); // in milliseconds

      document.cookie = "userToken=".concat(userToken, ";path=/;expires=").concat(nowTime.toGMTString(), ";");
      document.cookie = "userName=".concat(userName, ";path=/;expires=").concat(nowTime.toGMTString(), ";");
      document.cookie = "userRole=".concat(userRole, ";path=/;expires=").concat(nowTime.toGMTString(), ";");
      console.log('exito');
      window.location.replace("./home.html"); //window.location.replace("file:///home/chrislap/Dropbox/Easy-Motion-Web/src/home.html");
    }
  }]);

  return Cookie;
}();

var _default = Cookie;
exports.default = _default;