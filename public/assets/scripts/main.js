document.addEventListener("DOMContentLoaded", function () {
  // Botón "Ver más"
  const btnVerMas = document.querySelector(".btn_Ver_mas");
  if (btnVerMas) {
    btnVerMas.addEventListener("click", function () {
      alert("Más información.");
    });
  }

  // Botón "Más información"
  const btnInformacion = document.querySelector(".btn_Informacion");
  if (btnInformacion) {
    btnInformacion.addEventListener("click", function () {
      alert("Urban Heat Alert ofrece información actualizada para proteger tu salud.");
    });
  }

  // Botón "Ver mapa"
  const btnMapa = document.querySelector(".btn_Mapa");
  if (btnMapa) {
    btnMapa.addEventListener("click", function () {
      window.location.href = "alertas.html"; 
    });
  }
});
