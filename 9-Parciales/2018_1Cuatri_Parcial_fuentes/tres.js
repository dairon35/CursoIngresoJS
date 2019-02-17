function mostrar()
{

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

}
