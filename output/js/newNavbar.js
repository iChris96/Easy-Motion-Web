import Cookie from './cookie.js';
class NavBar {

  static listenNavBar(){
    let btn = document.getElementsByClassName("iconNavBar");
    //console.log(btn);
    btn[0].addEventListener("click", ()=>{
      let x = document.getElementsByClassName("buttons-navBar")[0];
      if (x.className === "buttons-navBar") {
          x.className += " responsive";
      } else {
          x.className = "buttons-navBar";
      }
    });
  }

  static addOptions(){
    let loginElement = document.getElementsByClassName('active')[0];
    let navBarOptions = loginElement.parentNode;
      //console.log(navBarOptions, loginElement);
    let nameCookie = Cookie.getCookie('userName');
    let rolCookie = Cookie.getCookie('userRole');

    NavBar.getCalendars();

    if(nameCookie != null){
      let divElement = document.createElement('div');
      divElement.classList.add('links-cascade');

      divElement.innerHTML = `
      <a href="./calendars.html" class="primary-link">Perfil
      <i class="fa fa-caret-down"></i>
      </a>
      <div class="seconds-links">
      <a href="./profile.html">Mi perfil</a>
      <a href="./logOut.html">LogOut</a>
      </div>
      `
      navBarOptions.insertBefore(divElement, loginElement);

      if(Number(rolCookie)==1){
        let divElement2 = divElement.cloneNode(true);
        divElement2.innerHTML = `
        <a href="./calendars.html" class="primary-link">Admin
        <i class="fa fa-caret-down"></i>
        </a>
        <div class="seconds-links">
        <a href="./manageBlogs.html">Blogs</a>
        <a href="./manageUsers.html">Usuarios</a>
        <a href="./manageCalendars.html">Calendarios</a>
        </div>
        `
        navBarOptions.insertBefore(divElement2, loginElement);
      }
      loginElement.remove();
    }
  }

  static getCalendars(){
    fetch('https://easy-motion.herokuapp.com/calendars')
    .then(response => response.json())
    .then(data => {
      if(data.status==200){
        NavBar.paintCalendars(data.data);
      }
    })
  }

  static paintCalendars(arrayCalendars){
    let calendarsSecondsLinks = document.getElementsByClassName('seconds-links')[0];
    //console.log(calendarsSecondsLinks);
    //console.log('calendars', arrayCalendars);

    arrayCalendars.forEach(function(element) {
      let aElement = document.createElement('a');
      aElement.href = `./calendar.html?id=${element.id}`;
      aElement.innerHTML = element.name;
      calendarsSecondsLinks.appendChild(aElement);
    })
  }


}
export default NavBar;
