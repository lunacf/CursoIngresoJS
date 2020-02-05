/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    //defino variables
    var numeroDividendo;
    var numeroDivisor;
    var resultado;

    //aplico parseInt()
    numeroDividendo = parseInt(document.getElementById("numeroDividendo"). value);
    numeroDivisor = parseInt(document.getElementById("numeroDivisor"). value);

    //calculo el resto
    resultado = (numeroDividendo % numeroDivisor) ;
    
    //lo que se mostrará en pantalla
    alert("El resto es "+ resultado );

}
