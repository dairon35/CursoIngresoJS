function mostrar()
{

	//var cantidadLibros;
	//var

	var primerDato;
	var segundoDato;
	var tercerDato;
	var cuartoDato;
	var sumaTotal;
	var mensaje;
	var operacion;

	primerDato=prompt("Por favor Ingrese primer valor: ");
	segundoDato=prompt("Por favor Ingrese segundo valor: ");
	tercerDato=prompt("Por favor Ingrese tercer valor: ");
	cuartoDato=prompt("Por favor Ingrese cuarto valor: ");

	primerDato=parseInt(primerDato);

	segundoDato=parseInt(segundoDato);

	tercerDato=parseInt(tercerDato);

	cuartoDato=parseInt(cuartoDato);

	sumaTotal=primerDato+segundoDato+tercerDato+cuartoDato;


	if (sumaTotal>100)
	{

		operacion= sumaTotal * 0.90;
		mensaje= operacion;

	}
	else
	{
		if (sumaTotal>50)
		{
			operacion=sumaTotal * 0.95;
			mensaje=operacion;
		}
		else
		{
			if (sumaTotal<50)
			{
				operacion= sumaTotal * 0.15;
				mensaje=operacion+sumaTotal;
			}
		}
	}

		alert("la suma total es de: " + mensaje);


}