/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    //Declaramos variables a usar
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    //Parseamos valores
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);

    //Realizamos la primer operación
    resultado = precioUno + precioDos + precioTres;

    //Mostramos resultado
    alert(resultado);

}
function Promedio() {
    //Declaramos variables a usar
    var precioUno;
    var precioDos;
    var precioTres;  
    var resultadoSuma;
    var promedio; 
    var cantidadVariables;

    //Parseamos por float   
    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);

    //Operaciones 
    resultadoSuma = precioUno + precioDos + precioTres;
    cantidadVariables = 3;
    promedio = resultadoSuma/cantidadVariables;
    
    //Mostramos resultado 

    alert(promedio);
}
function PrecioFinal() {
    //Declaramos variables
    var precioUno;
    var precioDos;
    var precioTres;  
    var totalValor;
    var ivaDelTotal;
    var totalValorConIva;

    //Parseamos por float
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);

    //Operaciones 
    totalValor = precioUno + precioDos + precioTres;
    ivaDelTotal = (totalValor * 21) / 100;
    totalValorConIva = totalValor + ivaDelTotal;

    //Mostramos resultado
    alert(totalValorConIva);

}