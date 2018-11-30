import Validator from './superValidator.js';
const validator = Validator;
window.onload = iniciar;

function iniciar() {
  const forms = document.getElementsByClassName('form');
  for(let form of forms){
    Validator.listen(form);
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      login();
    },false);
  }
}

function login(){
  let inputs = document.getElementsByClassName('inputs')[0].children;
  let email = inputs[0].value;
  let password = inputs[1].value;
  console.log(email,password);
  console.log('Logeado!');
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
        console.log('response =', response);
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
        console.log('token= ', data.data.token);
    })
    .catch(function(err) {
        console.error(err);
    });
}
