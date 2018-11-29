import Validator from './validator.js';
const validator = Validator;
//Traer form
const forms = document.getElementsByClassName('form');


window.onload = iniciar;

function iniciar() {

  //console.log(forms[0].children);
  //recorrer formularios
  for(let form of forms){
  //items en formularios
    for(let item of form.children){
        //busca el boton del formulario
        if(item.type == 'submit'){
          item.addEventListener('click', validate, false);
        }
    }
      //regresa lista de msg error o regresa ok
  }
}


function deleteErrors() {
  var msgErrors = document.getElementsByClassName('error-msg');

    while(msgErrors.length > 0){
        msgErrors[0].parentNode.removeChild(msgErrors[0]);
    }

    document.querySelectorAll('.error').forEach(function(a) {
      a.classList.remove('error');
    })
}

function validate(e){
  let form = e.target.parentNode;
  deleteErrors();
  for(let item of form) {
      if(item.type!='submit'){
        let msg = Validator.validateSomething(item.name, item.value);
        //si hay errores
        if(msg.length > 0){
          e.preventDefault();
          //añade clase error al input
          item.classList.add('error');

          //añade caja de mensajes errres
          var divError = document.createElement('div');
          divError.classList.add('error-msg');
          msg.forEach(function(element) {
            //console.log(element);
            var newErrorMsg = document.createElement('h1');
            var textError = document.createTextNode(element);
            newErrorMsg.appendChild(textError);
            divError.appendChild(newErrorMsg);
            });
            item.parentNode.insertBefore(divError, item.nextSibling);
          }
        }
      }
  }
