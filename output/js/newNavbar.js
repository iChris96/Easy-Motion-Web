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

var NavBar =
/*#__PURE__*/
function () {
  function NavBar() {
    _classCallCheck(this, NavBar);
  }

  _createClass(NavBar, null, [{
    key: "listenNavBar",
    value: function listenNavBar() {
      var btn = document.getElementsByClassName("icon");
      btn[0].addEventListener("click", function () {
        var x = document.getElementsByClassName("buttons-navBar")[0];

        if (x.className === "buttons-navBar") {
          x.className += " responsive";
        } else {
          x.className = "buttons-navBar";
        }
      });
    }
  }, {
    key: "addOptions",
    value: function addOptions() {
      var loginElement = document.getElementsByClassName('active')[0];
      var navBarOptions = loginElement.parentNode; //console.log(navBarOptions, loginElement);

      var nameCookie = _cookie.default.getCookie('userName');

      var rolCookie = _cookie.default.getCookie('userRole');

      NavBar.getCalendars();

      if (nameCookie != null) {
        var divElement = document.createElement('div');
        divElement.classList.add('links-cascade');
        divElement.innerHTML = "\n      <a href=\"./calendars.html\" class=\"primary-link\">Perfil\n      <i class=\"fa fa-caret-down\"></i>\n      </a>\n      <div class=\"seconds-links\">\n      <a href=\"./profile.html\">Mi perfil</a>\n      <a href=\"./logOut.html\">LogOut</a>\n      </div>\n      ";
        navBarOptions.insertBefore(divElement, loginElement);

        if (Number(rolCookie) == 1) {
          var divElement2 = divElement.cloneNode(true);
          divElement2.innerHTML = "\n        <a href=\"./calendars.html\" class=\"primary-link\">Admin\n        <i class=\"fa fa-caret-down\"></i>\n        </a>\n        <div class=\"seconds-links\">\n        <a href=\"./manageBlogs.html\">Blogs</a>\n        <a href=\"./manageUsers.html\">Usuarios</a>\n        <a href=\"./manageCalendars.html\">Calendarios</a>\n        </div>\n        ";
          navBarOptions.insertBefore(divElement2, loginElement);
        }

        loginElement.remove();
      }
    }
  }, {
    key: "getCalendars",
    value: function getCalendars() {
      fetch('https://easy-motion.herokuapp.com/calendars').then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.status == 200) {
          NavBar.paintCalendars(data.data);
        }
      });
    }
  }, {
    key: "paintCalendars",
    value: function paintCalendars(arrayCalendars) {
      var calendarsSecondsLinks = document.getElementsByClassName('seconds-links')[0]; //console.log(calendarsSecondsLinks);
      //console.log('calendars', arrayCalendars);

      arrayCalendars.forEach(function (element) {
        var aElement = document.createElement('a');
        aElement.href = './calendar.html';
        aElement.innerHTML = element.name;
        calendarsSecondsLinks.appendChild(aElement);
      });
    }
  }]);

  return NavBar;
}();

var _default = NavBar;
exports.default = _default;