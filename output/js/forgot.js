import Validator from './superValidator.js';
import NavBar from './newNavbar.js';
import Cookie from './cookie.js';
import Api from './api.js';
window.onload = iniciar;

function iniciar() {
  Cookie.haveSession();
  NavBar.addOptions();
  NavBar.listenNavBar();

  const forms = document.getElementsByClassName('form');
  for(let form of forms){
    Validator.listen(form);
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      showModal();
    },false);
  }

}


function showModal(){
  let modal = document.getElementsByClassName("modal")[0];
  modal.classList.add('show-modal');
  sendRecoverMail();
  //setTimeout(function(){location.href="./home.html"} , 4000);
}

function sendRecoverMail(){
  let email = document.getElementsByClassName('inputs')[0].children[0].value;
  Api.forgot(email);

}
