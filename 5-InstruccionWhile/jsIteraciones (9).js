function mostrar()
{

	var contador;
	var numeroMaximo;
	var numeroMinimo;
	var numeroIngresado;
	var respuesta;
	var bandera;

	
	// declarar variables
	contador=0;
	respuesta='si';
	//numeroMaximo=-999;
	//numeroMinimo=999;
	bandera=0;




	while(respuesta!='no')
	{
		numeroIngresado=prompt("Ingrese Numero");
		numeroIngresado=parseInt(numeroIngresado);

	if (bandera==0)
	{
		numeroMaximo=numeroIngresado;
		numeroMinimo=numeroIngresado;
		bandera=1;
	}	else()
		{
			if (numeroIngresado>numeroMaximo)
			 {
			 	numeroMaximo=numeroIngresado;
			 }
			
			if (numeroIngresado>numeroMinimo)
			{
				numeroMinimo=numeroIngresado
			}

				}

			 respuesta=prompt("Ingrese no para salir");
						
		}
				console.log("el maximo numero es "+numeroMaximo);
				console.log("el maximo numero es "+numeroMinimo);



}//FIN DE LA FUNCIÓN