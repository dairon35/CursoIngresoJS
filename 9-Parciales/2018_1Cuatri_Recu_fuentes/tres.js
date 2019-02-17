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



/*
	var precio;
	var descuento;
	var operacion;

	precio=prompt("Por favor Ingrese precio: ");
	descuento=prompt("Por favor ingrese el porcentaje de descuento: ");

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	operacion=precio * descuento / 100;
	operacion1=operacion+precio;

	document.getElementById('elPrecioFinal').value=operacion1;  

*/


}
