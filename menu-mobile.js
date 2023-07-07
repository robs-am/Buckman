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
const hideLogo = document.querySelector('[data-menu="logo"]');
const hideSearch = document.querySelector('[data-menu="search-bar"]');
const hideMinicart = document.querySelector('[data-menu="minicart"]');
const closeButton = document.querySelector('[data-menu="mobile-close"]');

function toggleMenu() {
  menuList.classList.toggle("active");
  menuButton.classList.toggle("active");
  hideLogo.classList.toggle("active");
  hideSearch.classList.toggle("active");
  hideMinicart.classList.toggle("active");
  closeButton.classList.toggle("active");
}

menuButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

const showDivion = document.querySelector("line-mobile");

function showLineDivision() {
  showDivion.classList.add("active");
}
