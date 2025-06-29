document.getElementById("agregar-alerta-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const direccion = document.getElementById("direccion").value;
    const temperatura = document.getElementById("temperatura").value;

    // Aquí puedes guardar las alertas o hacer lo que necesites
    alert("Alerta guardada para: " + direccion + " con temperatura de: " + temperatura + "°C");

    // Limpiar el formulario después de agregar alerta
    document.getElementById("direccion").value = "";
    document.getElementById("temperatura").value = "";
});
