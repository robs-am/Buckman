function exibirSubMenu() {
  const submenus = document.querySelectorAll(".buckman__li");

  // Percorre todos os elementos de submenu e os oculta
  submenus.forEach(function (submenu) {
    submenu.style.display = "none";
  });

  // Exibe apenas o submenu da categoria desejada
  document.getElementById("#novidades").style.display = "block";
}

document.getElementById("#novidades").addEventListener("click", function (e) {
  e.preventDefault().exibirSubMenu("#novidades");
});

/* const novidades = document.getElementById("#novidades");

function toggleSubMenu() {
  novidades.classList.add("active");
  if( novidades.style.display === "block" ) {

  }
}

novidades.addEventListener("click", toggleSubMenu); 
 */
