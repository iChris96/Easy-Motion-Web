class Validator {

  static functionsarray(){
    return{
      isMaxLength20: {
        tipo: ['name'],
        metodo: function(x) {   return x.length > 20; },
        msg: 'Es mayor a 20 caracteres',
      },
      isMinLength6: {
        tipo: ['password'],
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
      isVacio: {
        tipo: ['email','password'],
        metodo: function(x) {   return x.length == 0; },
        msg: 'Ingrese los datos',
      },

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
