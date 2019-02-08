/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var PrimerNumero;
	var SegundoNumero;

	PrimerNumero=numeroUno.value;
	SegundoNumero=numeroDos.value;

	PrimerNumero=parseInt(PrimerNumero);
	SegundoNumero=parseInt(SegundoNumero);
	
	alert(PrimerNumero + SegundoNumero);

}

