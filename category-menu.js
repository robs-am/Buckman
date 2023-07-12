/* const menu = document.querySelectorAll(".menu-dropdown");
const submenu = document.querySelectorAll(".dropdown-menu");
// Guarda classes dos menus e submenus

const showSubMenu = (e) => {
  const menu = e.target.querySelector(".menu-dropdown");
  return (menu.style.display = menu.style.display === "" ? "block" : "");
};

const setMenu = () => {
  menu.forEach((item) => item.addEventListenener("click", e, showSubMenu));
};

setMenu();
 */

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
