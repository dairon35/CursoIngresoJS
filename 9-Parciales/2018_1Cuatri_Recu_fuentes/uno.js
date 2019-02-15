
function mostrar()
{
	var mascota1;
	var mascota2;
	var pesoMascota1;
	var pesoMascota2;
	var sumaTotal;

	mascota1=prompt("Por favor ingrese el nombre de la primera mascota: ");
	mascota2=prompt("Por favor ingrese el nombre de la segunda mascota: ");

	pesoMascota1=prompt("Por favor ingrese el peso de la primera mascota: ");
	pesoMascota2=prompt("Por favor ingrese el peso de la segunda mascota: ");


	pesoMascota1=parseInt(pesoMascota1);
	pesoMascota2=parseInt(pesoMascota2);


	sumaTotal=(pesoMascota1 + pesoMascota2);

	alert("tenes dos mascotas: " +mascota1+ " y " +mascota2+ " que pesan: "+pesoMascota1+ " y "+pesoMascota2+" kilos "+" y la suma de los kilos es:" +sumaTotal);// no respeta enunciado  mal	

}


	//var ancho;
	//var largo;
	//var operacion;

	//ancho=prompt("por favor ingrese ancho");
	//largo=prompt("por favor ingrese largo");

	//ancho=parseInt(ancho);
	//largo=parseInt(largo);

	//operacion= (2 * ancho) + (2 * largo);

	//alert("el perimetro de tu rectangulo es: "+operacion);

