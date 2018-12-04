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

function paintCalendar(calendar) {
  // console.log(calendar);
  var days = calendar.routinesPerDay;
  var calendarContainer = document.getElementsByClassName('flex-calendar')[0];
  var counter = 0;
  days.forEach(function (day) {
    console.log('day');
    var div = document.createElement('div');
    div.classList.add('calendar');
    var h6 = document.createElement('h6');
    h6.textContent = "D\xEDa ".concat(counter);
    div.appendChild(h6);

    if (day != null) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = day[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var routine = _step.value;
          var button = document.createElement('button');
          button.type = 'button';
          button.classList.add('routine');
          button.textContent = routine.name;
          div.appendChild(button); //console.log(routine.name);
          //console.log(routine.name);
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

    calendarContainer.appendChild(div);
    ++counter;
  });
}

function getCalendar() {
  return _getCalendar.apply(this, arguments);
}

function _getCalendar() {
  _getCalendar = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var idCalendar, calendar, title;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            idCalendar = getParameterByName('id');
            _context.next = 3;
            return _api.default.getCalendar(idCalendar);

          case 3:
            calendar = _context.sent;

            if (calendar.status === 200) {
              paintCalendar(calendar.data);
              title = document.getElementsByClassName('title')[0];
              title.textContent = calendar.data.name;
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getCalendar.apply(this, arguments);
}

function iniciar() {
  _newNavbar.default.addOptions();

  _newNavbar.default.listenNavBar();

  getCalendar();
}

window.addEventListener('load', function () {
  iniciar();
}, false);