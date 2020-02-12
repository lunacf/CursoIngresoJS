function mostrar() {
    /*Al ingresar una edad menor a 18 años y 
    un estado civil distinto a "Soltero", 
    mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/

    //Declaro variables
    var edad;
    var estadoCivil;

    //Cargar variables parseando edad
    edad = parseInt(document.getElementById("edad").value);
    
    estadoCivil = document.getElementById("estadoCivil").value;
    
    console.warn("Ver la edad "+edad);
    console.warn("Ver el estado civil "+estadoCivil);

    //Declaramos condición
    if (edad <= 18 || (estadoCivil != "Soltero") {
        alert("Es muy pequeño para NO ser soltero");
    }

}




//FIN DE LA FUNCIÓN