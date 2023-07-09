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

function toggleMenu() {
  menuList.classList.toggle("active");
  menuButton.classList.toggle("active");
  hideLogo.classList.toggle("active");
  hideSearch.classList.toggle("active");
  hideMinicart.classList.toggle("active");
  hideFavoritos.classList.toggle("active");
  hideFaleConosco.classList.toggle("active");
  hideEntrar.classList.toggle("active");
  closeButton.classList.toggle("active");
  showLogin.classList.toggle("active");
  showNossasLojas.classList.toggle("active");
  hideRewardsBar.classList.toggle("active");
  headerTop.classList.add("active");
}

menuButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);
