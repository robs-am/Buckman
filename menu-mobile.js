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

const linkCollapse = document.getElementsByClassName("buckman__ul");
var i;

for (i = 0; i < linkCollapse.length; i++) {
  linkCollapse[i].addEventListener("click", function () {
    const collapseMenu = this.nextElementSibling;
    collapseMenu.classList.toggle("showCollapse");

    const rotate = collapseMenu.previousElementSibling;
    rotate.classList.toggle("rotate");
  });
}
