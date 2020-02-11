function mostrar()
{
//tomo la edad  
var edad;
edad = parseInt(document.getElementById("edad").value);
/*  t r u e + boolean + t r u e
if (edad >=13 && edad <=17)  //condicion compuesta
{
alert("Usted es adolescente");
}
*/  //esta afuera del rango//
if ( ! (edad <13 || edad >17))
{
    alert("es adolescente")
}


}//FIN DE LA FUNCIÓN