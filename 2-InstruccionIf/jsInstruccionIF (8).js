function mostrar() {

    /*
    l ingresar una edad menor a 18 años y 
					un estado civil distinto a "Soltero", NO HACER NADA,
					</br>pero si no es asi, y es soltero y no es menor, 
					mostrar el siguiente mensaje: 'Es soltero y no es menor.' */
    //Declaro variables 
    var edad;
    var estadoCivil;
    
    //Parseo edad y declaro estadoCivil
    edad = parseInt(document.getElementById("edad").value);
    estadoCivil = document.getElementById("estadoCivil").value;

    if (!(edad > 18) && (estadoCivil != "Soltero")) {
        alert(null);
    } else if (edad >= 18 || estadoCivil == "Soltero") {
        alert("Es soltero y no es menor");
    }



}//FIN DE LA FUNCIÓN