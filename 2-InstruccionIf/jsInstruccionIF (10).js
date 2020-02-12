function mostrar() {
	/*
	Al presionar el Bot&oacute;n, 
					asignar una nota RANDOM al examen y mostrar:<br>
					"EXCELENTE" para notas igual a 9 o 10,<br>
					"APROB&Oacute;" para notas mayores a 4,<br>
					"Vamos, la proxima se puede" para notas menores a 4 */

	var random;
	var notas;

	random = Math.floor(Math.random() * 11);
	notas = (random);
	
	if (notas >= 9 && (notas <= 10)) {
		alert("Excelente "+random);
	}
	else if (notas >= 4 && (notas <= 8)) {
		alert("Aprobado "+random)
	} else {
		alert("Vamos, la proxima se puede "+random);
	}

}//FIN DE LA FUNCIÓN