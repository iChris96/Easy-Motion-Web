import Validator from './validator.js';
const validator = Validator;

//Traer form
const forms = document.getElementsByClassName('form');
//console.log(forms[0].children);

//recorrer botones
for(let form of forms){

  for(let item of form.children){
      if(item.type = 'submit'){
        item.addEventListener('click', () => {
          for(let item of form){
            validator.validate(item.name, item.value);
          }
        })
      }
  }
    //regresa lista de msg error o regresa ok

}
