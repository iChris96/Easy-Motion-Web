var modals = document.getElementsByClassName("modals")[0].childNodes;
var allModals = [];
var routines = document.getElementsByClassName("routine");
/*filtrar solo divs y evitar otros elementos*/
modals.forEach(
  (currentValue, currentIndex, listObj) => {
    if(currentValue.nodeType == 1){
      allModals.push(currentValue);
    }
  },
  'miEsteArg'
)

for (let item of routines) {
  item.addEventListener("click", function() {
      /*obtenemos los dataset de la columna y los agregamos al editModal*/
      //console.log(item);
      var id = item.dataset.id;
      //console.log(id);
      allModals[id].style.display = "block";
  });
}

window.onclick = function(event) {
    if (event.target.className == "modal") {
        event.target.style.display = "none";
    }
}
