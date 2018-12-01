import Cookie from './cookie.js';
class Api {
      static logIn(email, password){
        console.log('soy mail', email);
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
              return response.json();
          })
          .then(function(data) {
              console.log('data = ', data);
          })

      }


      static register(name, mobile, weight, height, email, password){
        console.log('registrando');
        fetch('https://easy-motion.herokuapp.com/auth/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: email,
                mobile: mobile,
                password: password,
                name: name,
                weight: weight,
                height: height,
              })
          })
          .then(response => response.json())
          .then(data => {
            if(data.status==201){
              console.log('Registrado!');
              window.location.replace("./login.html");
            }
            console.log(data);
          })
      }
}
export default Api;
