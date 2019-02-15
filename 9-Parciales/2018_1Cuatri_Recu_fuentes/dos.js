function mostrar()
{
	var compra;
	var operacion;
	var operacion2;
	var operacion3;
	var operacion4;

	compra=prompt("Por favor ingrese el monto de la compra: ");

	compra=parseInt(compra);

	operacion = compra * 0.10;

	operacion2 = compra - operacion;

	operacion3 = operacion2 * 0.21;

	operacion4 = operacion3 + operacion2;

	alert("tu compra es de: " +compra+ " tenes un descuento del 10 % queda en: " +operacion2+ " mas el iva es :" +operacion4);	

}

	


  //var nombre;
  //var localidad;

  //nombre=document.getElementById('elNombre').value;
  //localidad=document.getElementById('laLocalidad').value;

  //alert("usted es: "+nombre+ " y vive en la localidad de: "+localidad);

