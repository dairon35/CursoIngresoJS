function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
var mensaje;

laHora=parseInt(laHora);

switch (laHora)
{
	case 07:
	case 08:
	case 09:
	case 10:
	case 11:
		mensaje="Es de mañana.";
	break;

	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
	case 19:
		mensaje="Es de tarde.";
	break;

	case 20:
	case 21:
	case 22:
	case 23:
		mensaje="Es de noche.";
	break;

	case 00:
	case 01:
	case 02:
	case 03:
	case 04:
	case 05:
	case 06:
	mensaje="Es de madrugada.";
}


	alert(mensaje);


//alert (laHora);
	
	



}//FIN DE LA FUNCIÓN