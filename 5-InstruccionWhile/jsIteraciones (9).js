function mostrar()
{

	var contador;
	var numeroMaximo;
	var numeroMinimo;
	var numeroIngresado;
	var respuesta;

	
	// declarar variables
	contador=0;
	respuesta='si';
	numeroMaximo=-999;


	while(respuesta!='no')
	{
		numeroIngresado=prompt("Ingrese Numero");
		numeroIngresado=parseInt(numeroIngresado);

		if (numeroIngresado>numeroMaximo)
		 {
		 	numeroMaximo=numeroIngresado;
		 }
		respuesta=prompt("Ingrese no para salir");
	
	}
			console.log("el maximo numero es "+numeroMaximo);



}//FIN DE LA FUNCIÓN