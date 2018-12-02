import NavBar from './newNavbar.js';
// import Promise from 'promise-polyfill';
// import "isomorphic-fetch"
window.onload = iniciar;

function iniciar (){
  NavBar.addOptions();
  NavBar.listenNavBar();
  getBlogs();
}

function getBlogs(){
  fetch('https://easy-motion.herokuapp.com/blog')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
}
