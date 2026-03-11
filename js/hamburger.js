


let mybutton = document.querySelector("#icons")
mybutton.addEventListener("click",hamburger)
let button = document.querySelector(".fade")
button.addEventListener("click",hamburger)

function hamburger(){
    let menu = document.querySelector(".hamburgerMenu")
  menu.classList.toggle("show")
  let layer = document.querySelector(".fade")
  layer.classList.toggle("visible")
};