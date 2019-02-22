function mostrar()
{

	var PrecioHabitacion;
	var tipoPago;
	var operacion;
	var mensaje;
	var paquete;
	var mensaje2;
	var operacion2;


	PrecioHabitacion=prompt("Por favor ingrese el precio de la habitacion: ");
	tipoPago=prompt("Por favor ingrese el tipo de pago tendiendo las siguientes Opciones: visa, paypal, mercadoPago o efectivo");

	PrecioHabitacion=parseInt(PrecioHabitacion);

	paquete=prompt("Por favor ingrese el paquete que desea adquirir: ");	
	switch(tipoPago)
	{
		case "visa":
		operacion= PrecioHabitacion * 0.10;
		mensaje= PrecioHabitacion - operacion;
		break;

		case "paypal":
				if (paquete == "todoIncluido" && tipoPago == "paypal")
				{
					operacion2= PrecioHabitacion * 0.20;
					mensaje=PrecioHabitacion- operacion2;
				}
		else {

		operacion= PrecioHabitacion * 0.15;
		mensaje= PrecioHabitacion - operacion;

		}

		break;

		case "mercadoPago":
		operacion= PrecioHabitacion * 0.10;
		mensaje= PrecioHabitacion - operacion;
		break;

		case "efectivo":

		operacion= PrecioHabitacion * 0.20;
		mensaje= PrecioHabitacion - operacion;
		
			if (paquete=="soloDesayunos" && tipoPago == efectivo)
			{
				operacion2=PrecioHabitacion * 0.20;
				mensaje2=PrecioHabitacion - operacion2;
			}

		break;

		case "otros":
		operacion= PrecioHabitacion * 0.05;
		mensaje= PrecioHabitacion - operacion;
		break;





	}
	

	alert(mensaje);

}
