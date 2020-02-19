function mostrar() {

    var sexo;
    do {
        //Estas lineas se ejecutaran solo una vez
        sexo = prompt("Ingrese f ó m");
        sexo.toLocaleLowerCase();
    } while (!(sexo == "f" || sexo == "m")); //Evalua la condición


} document.getElementById("Sexo").value = sexo;//FIN DE LA FUNCIÓN