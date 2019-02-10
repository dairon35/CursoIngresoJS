/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var operacion;

	primerNumero = document.getElementById('numeroUno').value;
	segundoNumero = document.getElementById('numeroDos').value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	operacion = primerNumero + segundoNumero;

	alert(operacion);
}




function restar()
{
	var primerNumero;
	var segundoNumero;
	var operacion;

	primerNumero = document.getElementById('numeroUno').value;
	segundoNumero = document.getElementById('numeroDos').value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	operacion = primerNumero - segundoNumero;

	alert(operacion);
}


function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var operacion;

	primerNumero = document.getElementById('numeroUno').value;
	segundoNumero = document.getElementById('numeroDos').value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	operacion = primerNumero * segundoNumero;

	alert(operacion);
}


function dividir()
{
	var primerNumero;
	var segundoNumero;
	var operacion;

	primerNumero = document.getElementById('numeroUno').value;
	segundoNumero = document.getElementById('numeroDos').value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	operacion = primerNumero / segundoNumero;

	alert(operacion);
}




