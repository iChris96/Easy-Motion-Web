window.onload = iniciar;




function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function registarUser(){
fetch('https://easy-motion.herokuapp.com/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'christopher_x10x@hotmail.com',
          name: 'chris',
          password: '1234567',
          height: '100',
          weight: '100'
        })
    })
    .then(function(response) {
        console.log('response =', response);
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });
}

function traerBlog(){
  fetch('https://easy-motion.herokuapp.com/users/1',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $2b$10$KYmh6UKvuItTI.N867sUkOhgITgrS9SJZRlb2.ZOvrOK0kYpWVlV6'
    },
  })
  .then(response => response.json())
  .then(data => {
    //console.log(data.data)
    let jamon = data.data;
    console.log(jamon);
  })

}
fetch('https://easy-motion.herokuapp.com/logout',{
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${myToken}`
  },
})
.then(response => response.json())
.then(data => {
  //console.log(data);
})

}

function iniciar (){
  traerBlog();
}

function login(){
  fetch('https://easy-motion.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'christopher_x10x@hotmail.com',
          password: '1234567',
        })
    })
    .then(function(response) {
        console.log('response =', response);
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });
}

var headers = new Headers();
headers.append('a', '1');
headers.append('b', '2');
headers.get('a')
"1"
//search cookie
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
undefined
let x = getCookie('name')
undefined
x
"ichrisx10x"
