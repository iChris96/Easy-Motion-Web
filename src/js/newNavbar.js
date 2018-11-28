let btn = document.getElementsByClassName("icon");
btn[0].addEventListener("click", ()=>{
  let x = document.getElementsByClassName("buttons-navBar")[0];
  if (x.className === "buttons-navBar") {
      x.className += " responsive";
  } else {
      x.className = "buttons-navBar";
  }
});
