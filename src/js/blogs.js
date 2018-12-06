import NavBar from './newNavbar.js';
import Api from './api.js';
// import Promise from 'promise-polyfill';
// import "isomorphic-fetch"

function paintArrows(){
  let arrowL = document.getElementsByClassName('arrowLeft')[0];
  let arrowR = document.getElementsByClassName('arrowRight')[0];
  arrowL.addEventListener('click', () => {
    //leer dataset
    let actual = Number(arrowL.dataset.id) - 1;
    if(actual != 0){
    //aumentarlo en 1
    arrowL.dataset.id = actual;
    //borrarBlogs
    deleteBlogs();
    //getBlogs(actualdataset)
    getBlogs(actual);
    }
  });

  arrowR.addEventListener('click', () => {
    //leer dataset
    let actual = Number(arrowL.dataset.id) + 1;
    //aumentarlo en 1
    arrowL.dataset.id = actual;
    //borrarBlogs
    deleteBlogs();
    //getBlogs(actualdataset)
    getBlogs(actual)
  });

}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function filtros(){
  let search = document.getElementsByClassName('searchButton')[0];
  //console.log(search);
  search.addEventListener('click', ()=>{
    deleteBlogs();
    getBlogs(1);
  });
}

function deleteBlogs(){
  let myNode = document.getElementsByClassName('flex-blogs')[0];
  while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
  }
}

function resultsfor(aut, title, cat){
  let main = document.getElementsByClassName('main')[0];
  let p = main.children[0];
  p.textContent = '';
  if( aut[0] || title[0] || cat[0] != undefined){
    console.log(main);
    p.textContent = `Resultados para: ${aut} ${title} ${cat}`;
  }
}

async function getBlogs(page){
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let category = document.getElementById('category').value;
  // let page = getParameterByName('page');
  resultsfor(author, title, category);
  let blogs = await Api.getBlogs(author, title, category,page);
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
    p.textContent = element.data.slice(0,140) + '....';

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
  getBlogs(1);
  filtros();
  paintArrows();
}

window.addEventListener('load',
  () => {
    iniciar();
  }, false);
