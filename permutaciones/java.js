function calcularPlaca() {
    // Número de opciones para los dígitos (10 opciones por dígito)
    var opcionesDigitos = 10;

    // Número de opciones para las letras (26 opciones por letra)
    var opcionesLetras = 26;

    // Calcular el número total de placas posibles
    var placasPosibles = Math.pow(opcionesDigitos, 3) * Math.pow(opcionesLetras, 3);

    // Mostrar el resultado en la página
    document.getElementById("resultado1").textContent = placasPosibles.toLocaleString(); // Formato con separadores de miles
}

function calcularPlacas() {
    // Obtener el número de dígitos y letras ingresados por el usuario
    var numDigitos = parseInt(document.getElementById("numDigitos").value);
    var numLetras = parseInt(document.getElementById("numLetras").value);

    // Número de opciones para los dígitos (10 opciones por dígito)
    var opcionesDigitos = 10;

    // Número de opciones para las letras (26 opciones por letra)
    var opcionesLetras = 26;

    // Calcular el número total de placas posibles
    var placasPosibles = Math.pow(opcionesDigitos, numDigitos) * Math.pow(opcionesLetras, numLetras);

    // Mostrar el resultado en la página
    document.getElementById("resultado2").textContent = placasPosibles.toLocaleString(); // Formato con separadores de miles
}