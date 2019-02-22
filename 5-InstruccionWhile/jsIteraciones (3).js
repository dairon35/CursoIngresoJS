function mostrar()
{

var clave; 
var cont=0;

	clave= prompt("ingrese el número clave.");

	while(clave !="utn750")
	{
		clave=prompt("ingrese el número clave.");

		if (clave !="utn750" && cont < 4)
		{
			alert("supero el limite de intentos");
		}
	}


}//FIN DE LA FUNCIÓN
