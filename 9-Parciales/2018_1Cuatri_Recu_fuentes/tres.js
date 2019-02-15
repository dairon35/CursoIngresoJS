function mostrar()
{


	var amigos;
	var total;
	var operacion;
	var resultadoFinal;

	amigos=prompt("Por favor indique la cantidad de amigos: ");

	amigos=parseInt(amigos);

	total=prompt("por favor ingrese el monto de la factura (NO INCLUYE IVA NI PROPINA): ");

	total=parseInt(total);

	operacion=(total *0.10)+(total *0.21) + total;

	resultadoFinal=operacion / amigos;

	alert("Cada uno de los comensales debe pagar un total de :" +resultadoFinal+ " Incluye iva y propina.");



	//var precio;
	//var porcentaje;
	//var operacion;
	//var operacion1;

	//precio=parseInt(precio);
	//porcentaje=parseInt(porcentaje);

	//prompt("Por favor ingrese precio: ")=precio;
	//prompt("por favor ingrese porcentaje: ")=porcentaje;

	//operacion=precio * porcentaje / 100;
	//operacion1=operacion - precio;

	//operacion=document.getElementById('elPrecioFina').value;




}
