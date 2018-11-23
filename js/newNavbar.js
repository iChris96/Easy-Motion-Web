let btn = document.getElementsByClassName("icon");
console.log(btn);

btn[0].addEventListener("click", ()=>{
  let x = document.getElementsByClassName("buttons-navBar")[0];
  console.log(x);
  if (x.className === "buttons-navBar") {
      x.className += " responsive";
  } else {
      x.className = "buttons-navBar";
  }
});
