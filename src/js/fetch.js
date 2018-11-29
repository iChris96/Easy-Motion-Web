fetch('https://easy-motion.herokuapp.com/blog')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
