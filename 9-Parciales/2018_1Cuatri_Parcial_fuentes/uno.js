
function mostrar()
{
	var ancho;
	var largo;
	var operacion;

	ancho=prompt("por favor ingrese ancho");
	largo=prompt("por favor ingrese largo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	operacion= (2 * ancho) + (2 * largo);

	alert(operacion);



}
