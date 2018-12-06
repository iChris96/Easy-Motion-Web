import NavBar from './newNavbar.js';
window.onload = iniciar;

function iniciar (){
  slide();
  ultimosCalendarios();
  NavBar.addOptions();
  NavBar.listenNavBar();
}

function slide() {
    let img = document.getElementsByClassName('cover');
    let counter = 0;
    setInterval(function(){
      img[counter].classList.remove('show');
      if(counter > 1){ counter = 0}
      else{ ++counter;} //2
      img[counter].classList.add('show');
      }, 3000);
}

function ultimosCalendarios(){
  fetch('https://easy-motion.herokuapp.com/calendars')
  .then(response => response.json())
  .then(data => {
    //console.log(data.data)
    let icons = document.querySelector('.links > article');
    //console.log(icons);
    let calendars = data.data;


    var aElement = document.createElement('a');
    var iElement = document.createElement('i');
    iElement.classList.add('box-icon', 'fas', 'fa-calendar-alt');
    var pElement = document.createElement('p');
    pElement.classList.add('box-text');

    for (var i = 0; i < 3; i++) {
      var newAelement = aElement.cloneNode(true);
      newAelement.href = `./calendar.html?id=${calendars[i].id}`;
      var newIelement = iElement.cloneNode(true);
      var newPelement = pElement.cloneNode(true);
      var pElementText = document.createTextNode(calendars[i].name);
      newPelement.appendChild(pElementText);
      newAelement.appendChild(newIelement);
      newAelement.appendChild(newPelement);
      icons.appendChild(newAelement);
    }
  })
}
