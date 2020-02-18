function mostrar() {
	     //Declaramos variable, parseamos
	var numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (numero <0 || numero >9 || isNaN(numero)) {
		//Copio lo mismo que cuando declare la variable
		numero = parseInt(prompt("Error. Reingrese un numero"));
	}
	    //Declaro document.getElementById y lo igualo a la variable (numero)

	document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN