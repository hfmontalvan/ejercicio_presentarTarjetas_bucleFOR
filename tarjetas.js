pintarTarjetas = function() {

    // 1. Capturar los componentes HTML
    let cajaDesde = document.getElementById("txtDesde");
    let cajaHasta = document.getElementById("txtHasta");
    let cajaSalto = document.getElementById("txtSalto");

    // 2. Obtener los valores ingresados
    let desde = parseInt(cajaDesde.value);
    let hasta = parseInt(cajaHasta.value);
    let salto = parseInt(cajaSalto.value);

    // 3. Capturar el contenedor de tarjetas
    let contenedor = document.getElementById("idContenedor");

    // 4. Validar los valores
    if (isNaN(desde) || isNaN(hasta) || isNaN(salto)) {
        alert("Ingrese los tres valores.");
        return;
    }

    if (salto <= 0 || desde > hasta) {
        alert("El salto debe ser positivo y Desde no puede superar Hasta.");
        return;
    }

    // 5. Variable para acumular las tarjetas
    let tarjetas = "";

    // 6. Generar las tarjetas con el salto indicado
    for (let i = desde; i <= hasta; i += salto) {

        tarjetas += "<div class='item'>" + i + "</div>";

    }

    // 7. Mostrar las tarjetas generadas
    contenedor.innerHTML = tarjetas;

}