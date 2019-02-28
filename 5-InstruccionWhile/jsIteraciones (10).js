function mostrar()
{   /*evaluar en -2 -5 3 8 0*/
	var contador;
	var respuesta;
	var sumaPositivos;
	var sumaNegativos;
	var numero;

	respuesta="si";
	sumaNegativos=0;

	while(respuesta!="no")
	{
		numero=prompt("ingrese un numero: ");
		numero=parseInt(numero);

		if (numero<0)
		{
			sumaNegativos=sumaNegativos+numero;
		}
		respuesta=prompt("ingrese 'no' para salir "," escriba aqui");
	}
		console.log("suma negativos es igual a: "+sumaNegativos);

}//FIN DE LA FUNCIÓN