function fetch() {
  var miInit = {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'text' }
    };
  fetch('https://easy-motion.herokuapp.com/blog',miInit)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

fetch();
console.log('s');
