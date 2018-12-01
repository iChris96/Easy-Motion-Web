import Cookie from './cookie.js';
class Api {

  static logIn(email, password){
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
          //console.log('response =', response);
          return response.json();
      })
      .then(function(data) {
          if(data.status==200){
            exito(data.data.token, 'Juaquin', data.data.userRole);
          }
      })
      .catch(function(err) {
          console.error(err);
      });
  }

  static register(name, weight, height, email, password){
    console.log('registrando');
    fetch('https://easy-motion.herokuapp.com/auth/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            weight: weight,
            height: height,
          })
      })
      .then(function(response) {
          console.log('response =', response);
          return response.json();
      })
      .then(function(data) {
          if(data.status==201){
            Api.logIn(email,password);
          }
          console.log('data = ', data);
      })
      .catch(function(err) {
          console.error(err);
      });
  }
}
export default Api;
