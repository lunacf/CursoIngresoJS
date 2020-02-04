/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    nombre = document.getElementById("elNombre"). value;
    var nombre = ("Usted se llama " + nombre);
    edad = document.getElementById("laEdad"). value;
    var edad = (" y tiene " + edad + " años" ); 
    alert(nombre + edad);
}

