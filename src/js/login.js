import Validator from './superValidator.js';
import NavBar from './newNavbar.js';
import Cookie from './cookie.js';
window.onload = iniciar;

function iniciar() {
  Cookie.haveSession();
  NavBar.addOptions();
  NavBar.listenNavBar();
  const forms = document.getElementsByClassName('form');
  for (var i = 0; i < forms.length; i++) {
    Validator.listen(forms[i]);
    forms[i].addEventListener('submit',(e)=>{
      e.preventDefault();
      login();
    },false);
  }
}

function login(){
  let inputs = document.getElementsByClassName('inputs')[0].children;
  let email = inputs[0].value;
  let password = inputs[1].value;
  fetch('https://easy-motion.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
    })
    .then(function(response) {
        //console.log('response =', response);
        return response.json();
    })
    .then(function(data) {
        if(data.status==200){
          //console.log(data);
          exito(data.data.userId, data.data.token, 'Juaquin', data.data.userRole);
        }else {
          invalido(inputs[0],inputs[1]);
        }

        //console.log('data = ', data);
        //console.log('token= ', data.data.token);
        //console.log('ok:', data.status);
        //console.log(typeof(data.status));
        //console.log('msg:', data.msg);
    })
    .catch(function(err) {
        console.error(err);
    });
}


function exito(userId, userToken, userName, userRole){
  let nowTime = new Date();
  nowTime.setTime(nowTime.getTime() + 25*60*1000); // in milliseconds
  document.cookie = `userId=${userId};path=/;expires=${nowTime.toGMTString()};`;
  document.cookie = `userToken=${userToken};path=/;expires=${nowTime.toGMTString()};`;
  document.cookie = `userName=${userName};path=/;expires=${nowTime.toGMTString()};`;
  document.cookie = `userRole=${userRole};path=/;expires=${nowTime.toGMTString()};`;
  console.log('exito');
  window.location.replace("./home.html");
  //window.location.replace("file:///home/chrislap/Dropbox/Easy-Motion-Web/src/home.html");
}

function invalido(emailInput,passInput){
  //error a inputs
  passInput.classList.add('error');
  emailInput.classList.add('error');

  //preparar msg y colocarlo al final
  let divPassError = document.createElement('div');
  divPassError.classList.add('error-msg');
  let h1Error = document.createElement('h1');
  let textError = document.createTextNode('Contraseña o correo invalido');
  h1Error.appendChild(textError);
  divPassError.appendChild(h1Error);
  passInput.parentNode.insertBefore(divPassError, passInput.nextSibling);
}
