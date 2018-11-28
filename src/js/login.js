import Persona from "./validator"; // Ruta correcta al archivo Js
let per= new Persona("Stack");
console.log(per.saludar());
//Traer botones
const forms = document.getElementsByClassName('form');

//recorrer botones
for(let form of forms){
  //escuchar click en botones
  form.addEventListener('click', () => {
    //mandale los elementos al validador
    console.log(form.children[0].children);
    for(let item of form){

    }
    //regresa lista de msg error o regresa ok
  });
}
