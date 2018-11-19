let btn = document.getElementsByClassName("icon");

btn[0].addEventListener("click", ()=>{
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
});
