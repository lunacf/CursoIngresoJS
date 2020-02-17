function mostrar()
{
  
var mes = document.getElementById('mes').value;

switch(mes) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Septiembre":
    case "Diciembre":
    alert("Tiene 31 días");
    break;
    case "Febrero":
    alert("Tiene 28 días");
    break;
    default:
    alert("Tiene 30 días"); 
}
	


}//FIN DE LA FUNCIÓN