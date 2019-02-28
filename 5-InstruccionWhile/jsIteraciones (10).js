function mostrar()
{   /*evaluar en -2 -5 3 8 0*/
	var contadorPositivos;
	var contadorNegativos;
	var respuesta;
	var sumaPositivos;
	var sumaNegativos;
	var numero;

	respuesta="si";
	sumaNegativos=0;
	sumaPositivos=0;

	while(respuesta!="no")
	{
		numero=prompt("ingrese un numero: ");
		numero=parseInt(numero);

		if (numero<0)
		{
			sumaNegativos=sumaNegativos+numero;
		}
		else
		{
			if (numero >0)
			{
				sumaPositivos=sumaPositivos+numero
			}
		}
		else
			if (numero) {}
		respuesta=prompt("ingrese 'no' para salir "," escriba aqui");
	}
		console.log("suma negativos es igual a: "+sumaNegativos);
		console.log("suma positivos es igual a: "+sumaPositivos);

}//FIN DE LA FUNCIÓN