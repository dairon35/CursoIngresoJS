/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var IngreseSueldo
	var operacion
	var resultadoFinal

	IngreseSueldo=sueldo.value;

	IngreseSueldo=parseInt(IngreseSueldo);

	operacion=(IngreseSueldo * 0.10);

	resultadoFinal=(IngreseSueldo + operacion);

	document.getElementById('resultado').value=resultadoFinal;
	
}
