function mostrar()
/*Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o 
niño (menor a 13 años).*/ {
    //Declaramos variable  
    var edad;

    //Obtenemos la edad y parseamos
    edad = parseInt(document.getElementById("edad").value);

    //Evaluamos condición 
    if (edad >= 18) {
        alert("Usted es mayor de edad");
    }
    else if (edad < 13) {
        alert("Usted es niño");
    }
    else {
        alert("Usted es adolescente");
    }




}