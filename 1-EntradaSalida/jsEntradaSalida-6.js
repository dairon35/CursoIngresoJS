/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var PrimerNumero;
	var SegundoNumero;
	var suma;

	PrimerNumero = document.getElementById('numeroUno').value;
	SegundoNumero = document.getElementById('numeroDos').value;

	/* PrimerNumero=numeroUno.value;
	//SegundoNumero=numeroDos.value;

	//PrimerNumero=parseInt(PrimerNumero);
	//SegundoNumero=parseInt(SegundoNumero);
		
		DE ESTA FORMA LA REALIZAMOS CON OCTAVIO VILLEGAS
	*/
	
	PrimerNumero = parseInt(PrimerNumero);
	SegundoNumero = parseInt(SegundoNumero);

	suma = PrimerNumero + SegundoNumero;

	//alert(PrimerNumero + SegundoNumero);

	alert("la suma es de: "+suma);

}

