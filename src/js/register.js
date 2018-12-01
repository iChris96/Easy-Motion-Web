import Validator from './superValidator.js';
import NavBar from './newNavbar.js';
import Cookie from './cookie.js';
import Api from './api.js'
const validator = Validator;
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
      register();
    },false);
  }
}

function register(){
  let inputs = document.getElementsByClassName('inputs')[0].children;
  let name = inputs[0].value;
  let weight = inputs[1].value;
  let height = inputs[2].value;
  let email = inputs[3].value;
  let password = inputs[4].value;
  console.log('jeje');
  Api.register(name, weight, height, email, password);

}
