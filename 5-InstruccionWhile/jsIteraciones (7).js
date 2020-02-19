function mostrar() {
	var numeroIngresado;
	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';

	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Lo que ingresaste no era un numero breo");
			numeroIngresado = parseInt(numeroIngresado);
		}
		//En esta parte del codigo sabemos que el numero es correcto
		contador++;
		acumulador = acumulador + numeroIngresado;
		respuesta = prompt("Si desea continuar, escriba si");

	}
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN