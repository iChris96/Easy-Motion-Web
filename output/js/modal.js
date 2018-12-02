"use strict";

/*modal {create, edit}*/
var modal = document.getElementsByClassName("modal");
/*btn {create}*/

var btn = document.getElementById("myBtn");
/*escucha para mostrar el modal create*/

btn.addEventListener("click", function () {
  modal[0].style.display = "block";
});
/*selecciona todos los edit buttoms*/

var editButtons = document.querySelectorAll('.editButton');
/*selecciona todos los span de cierre*/

var span = document.querySelectorAll('.close');
/*escucha todos los botones edit*/

editButtons.forEach(function (elem) {
  elem.addEventListener("click", function () {
    /*obtenemos los dataset de la columna y los agregamos al editModal*/
    var id = elem.dataset.id;
    var title = elem.dataset.title;
    var author = elem.dataset.author;
    modal[1].style.display = "block";
    modal[1].childNodes[3].childNodes[3].childNodes[1][0].value = title;
    modal[1].childNodes[3].childNodes[3].childNodes[1][1].value = author;
  });
});
/*escucha todos los span de cierre*/

span.forEach(function (elem) {
  elem.addEventListener("click", function () {
    elem.parentNode.parentNode.parentNode.style.display = "none";
  });
});
/*cierra el modal*/

window.onclick = function (event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  } else if (event.target == modal[1]) {
    modal[1].style.display = "none";
  }
};