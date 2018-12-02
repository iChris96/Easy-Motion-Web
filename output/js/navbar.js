"use strict";

var btn = document.getElementsByClassName("icon");
btn[0].addEventListener("click", function () {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
});