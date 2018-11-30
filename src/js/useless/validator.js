class Validator {

  static functionsarray(){
    return{
      isMaxLength30: {
        tipo: ['name'],
        metodo: function(x) {   return x.length > 30; },
        msg: 'Es mayor a 30 caracteres',
      },
      isMinLength6: {
        tipo: ['newPassword'],
        metodo: function(x) {   return x.length < 6;},
        msg: 'Es menor a 6 caracteres',
      },
      isMail: {
        tipo: ['email'],
        metodo: function(x) {
          const expresionMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return !expresionMail.test(x);
        },
        msg: 'No es un email valido',
      },
      isWord: {
        tipo: ['name'],
        metodo: function(x) {
          const expresionWord = /[a-zA-ZñÑ]{3,}/;
          return !expresionWord.test(x);
        },
        msg: 'No es una palabra valida',
      },
      isVacio: {
        tipo: ['email','password','weight','height','name','mobile'],
        metodo: function(x) {   return x.length == 0; },
        msg: 'Ingrese los datos',
      },
      isWeight: {
        tipo: ['weight'],
        metodo: function(x) {
          return x.length > 3 || (Number(x) < 0 || Number(x) > 250);},
        msg: 'Peso entre 0 y 250kg',
      },
      isHeight: {
        tipo: ['height'],
        metodo: function(x) {   return  x.length > 3  || (Number(x) < 0 || Number(x) > 300); },
        msg: 'Altura entre 0 y 300 CM',
      },
      isSpace:{
        tipo: ['password','name'],
        metodo: function(x) {
          return x[0] == ' ';
        },
        msg: 'No puede iniciar con espacio',
      },
      isMobile:{
        tipo: ['mobile'],
        metodo: function(x) {  return x.length != 10;},
        msg: 'Ingrese un numero de 10 digitos',
      }

    }
  }

  static validateSomething(type, data){
    let superMsg = [];
    //console.log(type);
    //console.log(data);
    let bigArray = Validator.functionsarray();
    for (var obj in bigArray) {
    	var elements = bigArray[obj]
      if(elements.tipo.indexOf(type)!= -1){
        if(elements.metodo(data)){
          superMsg.push(elements.msg);
        }
      }
      //console.log('primera vuelta');
    }
    return superMsg;
  }

}

export default Validator;
