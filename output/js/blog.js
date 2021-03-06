import NavBar from './newNavbar.js';
import Api from './api.js';

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function paintBlog(blog) {
  //console.log(blog);
  const bigBlog = document.getElementsByClassName('blog')[0];

  let h1 = document.createElement('h1');
  let a = document.createElement('a');
  a.textContent = blog.title;
  h1.appendChild(a);

  let h3 = document.createElement('h3');
  h3.textContent = blog.author;
  let h6 = document.createElement('h6');
  h6.textContent = blog.date.slice(0, 10);
  let p = document.createElement('p');
  p.textContent = blog.data;

  bigBlog.appendChild(h1);
  bigBlog.appendChild(h3);
  bigBlog.appendChild(h6);
  bigBlog.appendChild(p);

}

async function getBlog() {
  const idBlog = getParameterByName('id');
  const blog = await Api.getBlog(idBlog);
  if (blog.status === 200) {
    //console.log(blog);
    paintBlog(blog.data);
  }
}

function iniciar() {
  NavBar.addOptions();
  NavBar.listenNavBar();
  getBlog();
}

window.addEventListener('load',
  () => {
    iniciar();
  }, false);
