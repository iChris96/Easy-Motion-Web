import Validator from './superValidator.js';
import NavBar from './newNavbar.js';
import Api from './api.js';
import Cookie from './cookie.js';
const validator = Validator;
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
      register();
    },false);
  }
}

function register(){
  let inputs = document.getElementsByClassName('inputs')[0].children;
  let name = inputs[0].value;
  let mobile = inputs[1].value;
  let weight = inputs[2].value;
  let height = inputs[3].value;
  let email = inputs[4].value;
  let password = inputs[5].value;
  Api.register(name, mobile, weight, height, email, password);


}
