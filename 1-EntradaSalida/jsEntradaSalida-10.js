/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    //declaro variables
    var importe;
    var resultado;

    importe = parseInt(document.getElementById("resultado").value);
    resultado = (importe*25--)/100;

    document.getElementById("resultado"). value;
    alert(importe+resultado);
}
