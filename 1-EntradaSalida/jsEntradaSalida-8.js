/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var PrimerNumero;
	var SegundoNumero;
	var operacion;

	PrimerNumero=numeroDividendo.value;
	SegundoNumero=numeroDivisor.value;

	PrimerNumero=parseInt(PrimerNumero);
	SegundoNumero=parseInt(SegundoNumero);
	
	operacion=(PrimerNumero % SegundoNumero);
	alert("el resto es: " + operacion);
	

}
