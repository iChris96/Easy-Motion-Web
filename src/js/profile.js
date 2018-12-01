import NavBar from './newNavbar.js';
import Api from './api.js';
import Cookie from './cookie.js';
window.onload = iniciar;

function iniciar() {
  Cookie.noSession();
  NavBar.addOptions();
  NavBar.listenNavBar();
  getUser();
}

function getUser(){
  let userId = Cookie.getCookie('userId');
  let userToken = Cookie.getCookie('userToken');

  fetch(`https://easy-motion.herokuapp.com/users/${userId}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    },
  })
  .then(response => response.json())
  .then(data => {
    //console.log('data=',data);
    if(data.status==200){
      paintUser(data.data.name, data.data.mobile, data.data.email);
      getProgress();
    }
  })
}

function paintUser(name, mobile, email){
  let nameh5 = document.getElementById('name');
  let mobileh5 = document.getElementById('mobile');
  let emailh5 = document.getElementById('email');
  nameh5.innerHTML = `<i class="fas fa-user"></i>${name}`;
  mobileh5.innerHTML =`<i class="fa fa-mobile"></i>${mobile}`;
  emailh5.innerHTML = `<i class="fa fa-envelope"></i>${email}`;
}

function getProgress(){
  let userId = Cookie.getCookie('userId');
  let userToken = Cookie.getCookie('userToken');

  fetch(`https://easy-motion.herokuapp.com/users/${userId}/progress`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    },
  })
  .then(response => response.json())
  .then(data => {
    //console.log('data=',data);
    if(data.status==200){
      paintProgress(data.data);
    }
  })
}

function paintProgress(arrayProgress){
  let tBody = document.getElementsByClassName('rowgroup')[1];
  console.log(tBody);
  //console.log('array: ',arrayProgress);
  arrayProgress.forEach(function(element) {
    let trElement = document.createElement('tr');
    trElement.classList.add('row');

    let tdFecha = document.createElement('td');
    tdFecha.classList.add('cell');
    let textFecha = document.createTextNode(element.date.slice(0,10));
    tdFecha.appendChild(textFecha);

    let tdWeight = document.createElement('td');
    tdWeight.classList.add('cell');
    let textWeight = document.createTextNode(element.weight);
    tdWeight.appendChild(textWeight);

    let tdHeight = document.createElement('td');
    tdHeight.classList.add('cell');
    let textHeight = document.createTextNode(element.height);
    tdHeight.appendChild(textHeight);

    trElement.appendChild(tdFecha);
    trElement.appendChild(tdWeight);
    trElement.appendChild(tdHeight);
    console.log(trElement);

    tBody.appendChild(trElement);
  });

}
