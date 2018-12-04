"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cookie = _interopRequireDefault(require("./cookie.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api =
/*#__PURE__*/
function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: "logIn",
    value: function logIn(email, password) {
      console.log('soy mail', email);
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
        return response.json();
      }).then(function (data) {
        console.log('data = ', data);
      });
    }
  }, {
    key: "register",
    value: function register(name, mobile, weight, height, email, password) {
      console.log('registrando');
      fetch('https://easy-motion.herokuapp.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          mobile: mobile,
          password: password,
          name: name,
          weight: weight,
          height: height
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.status == 201) {
          console.log('Registrado!');
          window.location.replace("./login.html");
        }

        console.log(data);
      });
    }
  }, {
    key: "forgot",
    value: function forgot(email) {
      fetch('https://easy-motion.herokuapp.com/auth/forgot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.status == 201) {
          console.log('Registrado!');
          window.location.replace("./login.html");
        }

        console.log(data);
      });
    }
  }, {
    key: "editProfile",
    value: function editProfile(name, mobile, email) {
      var userId = _cookie.default.getCookie('userId');

      var userToken = _cookie.default.getCookie('userToken');

      return fetch("https://easy-motion.herokuapp.com/users/".concat(userId), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(userToken)
        },
        body: JSON.stringify({
          email: email,
          mobile: mobile,
          name: name
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        //console.log(data);
        return data;
      });
    }
  }, {
    key: "addProgress",
    value: function addProgress(weight, height) {
      var userId = _cookie.default.getCookie('userId');

      var userToken = _cookie.default.getCookie('userToken');

      return fetch("https://easy-motion.herokuapp.com/users/".concat(userId, "/progress"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(userToken)
        },
        body: JSON.stringify({
          weight: weight,
          height: height
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
        return data;
      });
    }
  }, {
    key: "getBlogs",
    value: function getBlogs(auth, title, category) {
      console.log(auth, title, category);
      return fetch("https://easy-motion.herokuapp.com/blog?author=".concat(auth, "&category=").concat(category, "&title=").concat(title), {
        method: 'GET'
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data;
      });
    }
  }, {
    key: "getBlog",
    value: function getBlog(idBlog) {
      console.log(idBlog);
      return fetch("https://easy-motion.herokuapp.com/blog/".concat(idBlog), {
        method: 'GET'
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data;
      });
    }
  }, {
    key: "getCalendar",
    value: function getCalendar(idCalendar) {
      return fetch("https://easy-motion.herokuapp.com/calendars/".concat(idCalendar), {
        method: 'GET'
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data;
      });
    }
  }]);

  return Api;
}();

var _default = Api;
exports.default = _default;