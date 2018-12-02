import Validator from './superValidator.js';
import NavBar from './newNavbar.js';
import Cookie from './cookie.js';
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

function send(){
  console.log('revisa tu email');
}

function showModal(){
  let modal = document.getElementsByClassName("modal")[0];
  modal.classList.add('show-modal');
  setTimeout(function(){location.href="./home.html"} , 4000);
}
