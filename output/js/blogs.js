"use strict";

var _newNavbar = _interopRequireDefault(require("./newNavbar.js"));

var _api = _interopRequireDefault(require("./api.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import Promise from 'promise-polyfill';
// import "isomorphic-fetch"
function filtros() {
  var search = document.getElementsByClassName('searchButton')[0]; //console.log(search);

  search.addEventListener('click', function () {
    borrarBlogs();
    getBlogs();
  });
}

function borrarBlogs() {
  var myNode = document.getElementsByClassName('flex-blogs')[0];

  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}

function getBlogs() {
  return _getBlogs.apply(this, arguments);
}

function _getBlogs() {
  _getBlogs = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var author, title, category, blogs;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            author = document.getElementById('author').value;
            title = document.getElementById('title').value;
            category = document.getElementById('category').value;
            _context.next = 5;
            return _api.default.getBlogs(author, title, category);

          case 5:
            blogs = _context.sent;
            paintBlogs(blogs.data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getBlogs.apply(this, arguments);
}

function paintBlogs(arrayBlogs) {
  //console.log(arrayBlogs);
  var blogsContainer = document.getElementsByClassName('flex-blogs')[0]; //console.log(blogsContainer);

  arrayBlogs.forEach(function (element) {
    var div = document.createElement('div');
    div.classList.add('blog');
    var h1 = document.createElement('h1');
    var a = document.createElement('a');
    a.href = './blog.html?id=' + element.id;
    a.textContent = element.title;
    h1.appendChild(a);
    var h5 = document.createElement('h5');
    h5.textContent = element.date.slice(0, 10);
    var p = document.createElement('p');
    p.textContent = element.data;
    var autor = document.createElement('h4');
    autor.textContent = element.author;
    div.appendChild(h1);
    div.appendChild(h5);
    div.appendChild(p);
    div.appendChild(autor);
    blogsContainer.appendChild(div);
  });
}

function iniciar() {
  _newNavbar.default.addOptions();

  _newNavbar.default.listenNavBar();

  getBlogs();
  filtros();
}

window.addEventListener('load', function () {
  iniciar();
}, false);