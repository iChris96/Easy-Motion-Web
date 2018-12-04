"use strict";

var _newNavbar = _interopRequireDefault(require("./newNavbar.js"));

var _api = _interopRequireDefault(require("./api.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function paintBlog(blog) {
  //console.log(blog);
  var bigBlog = document.getElementsByClassName('blog')[0];
  var h1 = document.createElement('h1');
  var a = document.createElement('a');
  a.textContent = blog.title;
  h1.appendChild(a);
  var h3 = document.createElement('h3');
  h3.textContent = blog.author;
  var h6 = document.createElement('h6');
  h6.textContent = blog.date.slice(0, 10);
  var p = document.createElement('p');
  p.textContent = blog.data;
  bigBlog.appendChild(h1);
  bigBlog.appendChild(h3);
  bigBlog.appendChild(h6);
  bigBlog.appendChild(p);
}

function getBlog() {
  return _getBlog.apply(this, arguments);
}

function _getBlog() {
  _getBlog = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var idBlog, blog;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            idBlog = getParameterByName('id');
            _context.next = 3;
            return _api.default.getBlog(idBlog);

          case 3:
            blog = _context.sent;

            if (blog.status === 200) {
              //console.log(blog);
              paintBlog(blog.data);
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getBlog.apply(this, arguments);
}

function iniciar() {
  _newNavbar.default.addOptions();

  _newNavbar.default.listenNavBar();

  getBlog();
}

window.addEventListener('load', function () {
  iniciar();
}, false);