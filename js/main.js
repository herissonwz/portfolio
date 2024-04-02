const body = document.querySelector('body');
const burguer = document.querySelector(".burguer");
burguer.addEventListener("click", () => {
 body.classList.add("open_menu");
})
const closeMenu = document.querySelector('.close');
closeMenu.addEventListener("click", () => {
  if( body.classList.contains("open_menu")){
    body.classList.remove("open_menu");
  }
   })