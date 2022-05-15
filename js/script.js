


let button = document.querySelector(".btn-menu")
let navbar = document.querySelector(".navbar")
button.addEventListener('click', ()=>{
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
      } else {
        navbar.style.display = "block";
      }
})