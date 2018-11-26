"use strict";

var modals = document.getElementsByClassName("modals")[0].childNodes;
var allModals = [];
var routines = document.getElementsByClassName("routine");
/*filtrar solo divs y evitar otros elementos*/

modals.forEach(function (currentValue, currentIndex, listObj) {
  if (currentValue.nodeType == 1) {
    allModals.push(currentValue);
  }
}, 'miEsteArg');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var item = _step.value;
    item.addEventListener("click", function () {
      /*obtenemos los dataset de la columna y los agregamos al editModal*/
      //console.log(item);
      var id = item.dataset.id; //console.log(id);

      allModals[id].style.display = "block";
    });
  };

  for (var _iterator = routines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
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

window.onclick = function (event) {
  if (event.target.className == "modal") {
    event.target.style.display = "none";
  }
};