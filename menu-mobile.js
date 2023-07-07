/* export default function initMenuMobile() {} */

/* const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

function openMenu(event) {
  menuList.classList.add("active");
  menuButton.classList.add("active");
}

menuButton.addEventListener("click", openMenu);

openMenu(); */

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

function toggleMenu() {
  menuList.classList.toggle("active");
  menuButton.classList.toggle("active");
}

menuButton.addEventListener("click", toggleMenu);
