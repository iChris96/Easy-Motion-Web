import NavBar from './newNavbar.js';
import Api from './api.js';
// import Promise from 'promise-polyfill';
// import "isomorphic-fetch"
window.onload = iniciar;

function iniciar (){
  NavBar.addOptions();
  NavBar.listenNavBar();
  getBlogs();
  filtros();
}

function filtros(){
  let search = document.getElementsByClassName('searchButton')[0];
  console.log(search);
  search.addEventListener('click', ()=>{  borrarBlogs();});
}

function borrarBlogs(){
  let myNode = document.getElementsByClassName('flex-blogs')[0];
  while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
  }
}

async function getBlogs(){
  let autor = document.getElementById('author');
  //console.log(autor);
  //console.log(autor.value);


  let blogs = await Api.getBlogs();
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
    a.href='./blog?id='+ element.id;
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
