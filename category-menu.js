const hideli = document.querySelectorAll(".buckman__li");

function esconderLi() {
  // Percorre todos os elementos e os oculta
  categorias.forEach(function (categoria) {
    categoria.style.display = "none";
  });
}

document
  .querySelectorAll(".buckman__li")
  .addEventListener("click", function () {
    esconderLi(); // Esconde todas as categorias
    document.querySelector('[data-menu="novidades"]').style.display = "block"; // Mostra apenas a categoria desejada
  });

/* const novidades = document.querySelector('[data-menu="novidades"]');


function showNovidades() {
  novidades.classList.toggle("active")
    if (novidades = style.display == 'block') {

    }

} */
/* 
novidades.addEventListener("click", showNovidades); */
