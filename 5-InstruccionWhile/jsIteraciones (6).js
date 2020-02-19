function mostrar()
{

	var numeroIngresado;
	var contador=0;
	var acumulador=0;
	var promedio;
do {
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
  while (isNaN(numeroIngresado)) {
	numeroIngresado = prompt("Lo que ingresaste no era un número, intentelo de nuevo");
	numeroIngresado = parseInt(numeroIngresado);
    } 
    contador++;
	acumulador = acumulador + numeroIngresado;
}  while(contador < 5);
     


document.getElementById('suma').value=acumulador;
promedio = acumulador / contador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN