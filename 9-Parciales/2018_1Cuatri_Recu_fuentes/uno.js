
function mostrar()
{
	var ancho;
	var largo;
	var operacion;

	prompt("por favor ingrese ancho")=ancho;
	largo=prompt("por favor ingrese largo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	operacion= (2 * ancho) + (2 * largo);

	alert(operacion);
}
