const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');
const hideLogo = document.querySelector('[data-menu="logo"]');
const hideSearch = document.querySelector('[data-menu="search-bar"]');
const hideMinicart = document.querySelector('[data-menu="minicart"]');
const hideFavoritos = document.querySelector('[data-menu="favoritos"]');
const hideFaleConosco = document.querySelector('[data-menu="fale-conosco"]');
const hideEntrar = document.querySelector('[data-menu="entrar"]');
const closeButton = document.querySelector('[data-menu="mobile-close"]');
const showLogin = document.querySelector('[data-menu="login"]');
const showNossasLojas = document.querySelector('[data-menu="nossas-lojas"]');
const hideRewardsBar = document.querySelector('[data-menu="rewards-bar"]');
const headerTop = document.querySelector('[data-menu="header-top"]');
const navbarWrapper = document.querySelector(".navbar-wrapper");

function toggleMenu() {
  navbarWrapper.classList.toggle("active");
}

menuButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

/* $(document).ready(function () {
  $(".btn-menu").on("click", function () {
    $(".navbar-wrapper").addClass("active");
  });

  $(".menu-dropdown").on("click", function (e) {
    e.preventDefault();
    $(".dropdown-wrapper", this).addClass("active");
  });
}) */

const menu = document.querySelectorAll(".menu-dropdown");
const submenu = document.querySelectorAll(".dropdown-menu");

const showSubMenu = (e) => {
  const currentMenu = e.currentTarget.querySelector(".dropdown-menu");

  menu.forEach((item) => {
    if (item !== e.currentTarget) {
      item.style.display = "none";
    }
  });

  submenu.forEach((item) => {
    if (item !== currentMenu) {
      item.style.display = "none";
    }
  });

  currentMenu.style.display = "block";
};

const setMenu = () => {
  menu.forEach((item) => item.addEventListener("click", showSubMenu));
};

setMenu();
