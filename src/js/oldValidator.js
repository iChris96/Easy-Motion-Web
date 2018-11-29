class Validator {

  static test() {
    console.log('hello woorld');
  }

  isMinLength6(x){
    return x.length < 8;
  }

  isMaxLength20(x){
    return x.length > 10;
  }

  isRequired(x){
    return x === undefined || x === null || isNaN(x) || x.length == 0;
  }

  mailValidator(value){
    let msg = [];
    if(this.isRequired(value))
      msg.push('No es un tipo de dato valido');

    return msg;
  }

  passwordValidator(value){
    let msg = [];
    if(this.isMinLength6(value))
      msg.push('Tu contraseña debe tener por lo menos 6 caracteres');
    if(this.isMaxLength20(value))
      msg.push('Demaciado larga la contraseña');
    if(this.isRequired(value))
      msg.push('No es un tipo de dato valido');
    return msg;
  }

  validate(x, y){
    switch (x) {
      case 'email':
        return this.mailValidator(y);
        break;
      case 'password':
        return this.passwordValidator(y);
        break;
      case 2:
        console.log('a is equal to 2.');
        break;
      case 3:
        console.log('a is equal to 3.');
        break;
      case 4:
        console.log('a is equal to 4.');
        break;
      default:
        console.log('I run if no one else is true.');
    }
  }



}


export default new Validator();
