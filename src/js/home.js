window.onload = iniciar;

function iniciar (){
  ultimosCalendarios();
  document.cookie = "nombre = chris";
}


function ultimosCalendarios(){
  fetch('https://easy-motion.herokuapp.com/calendars')
  .then(response => response.json())
  .then(data => {
    //console.log(data.data)
    let icons = document.querySelector('.links > article');
    console.log(icons);
    let jamon = data.data;
    console.log(jamon);

    var aElement = document.createElement('a');
    var iElement = document.createElement('i');
    iElement.classList.add('box-icon', 'fas', 'fa-calendar-alt');
    var pElement = document.createElement('p');
    pElement.classList.add('box-text');

    for (var i = 0; i < 3; i++) {
      var newAelement = aElement.cloneNode(true);
      var newIelement = iElement.cloneNode(true);
      var newPelement = pElement.cloneNode(true);
      var pElementText = document.createTextNode(jamon[i].name);
      newPelement.appendChild(pElementText);
      newAelement.appendChild(newIelement);
      newAelement.appendChild(newPelement);
      icons.appendChild(newAelement);
    }
  })

}
