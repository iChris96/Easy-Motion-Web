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

      static forgot(email){
        fetch('https://easy-motion.herokuapp.com/auth/forgot', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: email,
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

      static editProfile(name, mobile, email){
        let userId = Cookie.getCookie('userId');
        let userToken = Cookie.getCookie('userToken');

        return fetch(`https://easy-motion.herokuapp.com/users/${userId}`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${userToken}`,
              },
              body: JSON.stringify({
                email: email,
                mobile: mobile,
                name: name,
              })
          })
          .then(response => response.json())
          .then(data => {
            //console.log(data);
            return data;
          })
      }

      static addProgress(weight, height) {
        let userId = Cookie.getCookie('userId');
        let userToken = Cookie.getCookie('userToken');

        return fetch(`https://easy-motion.herokuapp.com/users/${userId}/progress`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${userToken}`,
              },
              body: JSON.stringify({
                weight: weight,
                height: height,
              })
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            return data;
          })
      }

    static getBlogs(auth, title, category) {
      console.log(auth, title, category);
      return fetch(`https://easy-motion.herokuapp.com/blog?author=${auth}&category=${category}&title=${title}`)
      .then(response => response.json())
      .then(data => {
        return data;
      })
    }

  static getBlog(idBlog) {
    console.log(idBlog);
    return fetch(`https://easy-motion.herokuapp.com/blog/${idBlog}`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }

  static getCalendar(idCalendar) {
    return fetch(`https://easy-motion.herokuapp.com/calendars/${idCalendar}`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }
}
export default Api;
