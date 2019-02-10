/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var ingreseImporte;
	var operacion;
	var operacion1;

	ingreseImporte=document.getElementById('importe').value;
	
	ingreseImporte=parseInt(ingreseImporte);

	//operacion = ingreseImporte - (ingreseImporte * 25 / 100 ); SOLUCION DIFERENTE

	//resultado.value = operacion; SOLUCION DIFERENTE
	
	operacion=(ingreseImporte * 0.25);

	operacion1=(ingreseImporte - operacion);

	document.getElementById('resultado').value=operacion1;
}
