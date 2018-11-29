async function getAll(x) {
    return await fetch('https://easy-motion.herokuapp.com/blog', this.headers).then(function(response) {
      return response.json();
    });
  }

let p = getAll(5);
console.log(p);
