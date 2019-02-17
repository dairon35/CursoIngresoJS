function mostrar()
{

	var numero1;
	var numero2;
	var mensaje;

	numero1=prompt("Por favor ingrese el primer numero: ");
	numero2=prompt("Por favor ingrese el segundo numero: ");
	

	if (numero1 ===  numero2)
	{
		mensaje=numero1+numero2;
	}

	else{
		if (numero1>numero2) {

			numero1=parseInt(numero1);
			numero2=parseInt(numero2);
			mensaje=numero1- numero2;
		}
	}
	if (numero1<numero2)
		{
			numero1=parseInt(numero1);
			numero2=parseInt(numero2);
			mensaje=numero1 + numero2;
		}

		/*else{
			if (mensaje>=10)
			{
				
			}
			}*/

			alert(mensaje);


}

