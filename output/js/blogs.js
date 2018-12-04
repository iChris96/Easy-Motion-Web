import NavBar from './newNavbar.js';
import Api from './api.js';
// import Promise from 'promise-polyfill';
// import "isomorphic-fetch"

function filtros(){
  let search = document.getElementsByClassName('searchButton')[0];
  //console.log(search);
  search.addEventListener('click', ()=>{
    borrarBlogs();
    getBlogs();
  });
}

function borrarBlogs(){
  let myNode = document.getElementsByClassName('flex-blogs')[0];
  while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
  }
}

async function getBlogs(){
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let category = document.getElementById('category').value;
  let blogs = await Api.getBlogs(author, title, category);
  paintBlogs(blogs.data);
}

function paintBlogs(arrayBlogs){
  //console.log(arrayBlogs);
  let blogsContainer = document.getElementsByClassName('flex-blogs')[0];
  //console.log(blogsContainer);
  arrayBlogs.forEach(function(element) {
    let div = document.createElement('div');
    div.classList.add('blog');

    let h1 = document.createElement('h1');
    let a = document.createElement('a');
    a.href='./blog.html?id='+ element.id;
    a.textContent = element.title;
    h1.appendChild(a);

    let h5 = document.createElement('h5');
    h5.textContent = element.date.slice(0,10);

    let p = document.createElement('p');
    p.textContent = element.data;

    let autor = document.createElement('h4');
    autor.textContent = element.author;

    div.appendChild(h1);
    div.appendChild(h5);
    div.appendChild(p);
    div.appendChild(autor);

    blogsContainer.appendChild(div);

  })
}

function iniciar() {
  NavBar.addOptions();
  NavBar.listenNavBar();
  getBlogs();
  filtros();
}

window.addEventListener('load',
  () => {
    iniciar();
  }, false);
