let hamburger = document.querySelector(".ham-icon");
hamburger.addEventListener("click", toggleClass);

function toggleClass() {
  let menu = document.querySelector(".main-menu");
  menu.classList.toggle("toggle-cls");
}
