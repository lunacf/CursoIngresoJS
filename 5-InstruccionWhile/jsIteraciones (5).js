function mostrar() {

    var sexo = prompt("ingrese f ó m .");
    while (sexo != "f" || sexo == "m") {
        sexo = alert("Usted es masculino");
        document.getElementById('Sexo').value = sexo;
    }
    alert("Usted es femenino");

    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN