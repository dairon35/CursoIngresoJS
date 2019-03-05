function mostrar()
{
	var nota=0;
	var sexo;
	var contador=0;
	var promedio;
	var acumuladorNotas=0;
	var notaVaronesSeis;
	var notaBaja=10;
	var sexoNotaBaja;
	var notaVarones;
	var sexoNotaVarones;
	var contadorVarones=0;

	while(contador<5)
	{
		var notaOk = false;

		while(!notaOk){

		nota = prompt("Por favor Ingrese su nota: ");
		nota = parseInt(nota);

		if (nota>0 && nota<11){

			acumuladorNotas += nota;
			notaOk=true;
			
			}
			else{
					alert("La nota debe estar  en el rango 0 a 10");

				}	
			}
			var sexoOk= false;

			while(!sexoOk){

				sexo=prompt("por favor ingrese f si su sexo es femenino o m si su sexo es masculino");

				if (sexo == "f" || sexo== "m" ){

					sexoOk=true;
				}
				if (nota < notaBaja)
				{
					notaBaja=nota;
					sexoNotaBaja=sexo;
				}
				if (nota>=6 && sexo== "m"){
					contadorVarones++;

				}

			}


		contador++;
	}

	promedio=acumuladorNotas /contador;

	alert("el promedio de las 5  notas es de: " +promedio+ " la nota mas baja es de: " +notaBaja+ " el sexo de la persona con nota mas baja es: " +sexoNotaBaja+ " La cantidad de varones que su nota haya sido mayor o igual a 6 : " +contadorVarones);

}








	/*var velocidadOK;
	var velocidad = 0;
	var cont = 0;
	var combustible = '';
	var acumVelocidad = 0;
	var cont = 0;
	var promedioVelocidad = 0;
	var velocidadMinima = 250;
	var velocidadMinimaCombustible = '';
	var contLiquidoMaxVelocidad = 0;
	var velocidadMaxSolido = '0';

	while(cont<5)
	{
		velocidadOK = false;
		
		while (!velocidadOK) {
			velocidad = prompt("Por favor ingrese la velocidad del vehiculo: ");
			velocidad = parseInt(velocidad);

			if (velocidad > 0 && velocidad < 251) {
				
				acumVelocidad += velocidad;
				velocidadOK = true;
			} else {
				alert("El rango de velocidad solo puede ser de 0 a 250 km/h");
			}
		}

		var naftaOK = false;

		while(!naftaOK) {
			combustible = prompt("Por favor ingrese el tipo de combustible si es solido 's' o liquido 'l'");

			if (combustible == 's' || combustible == 'l') {
				naftaOK = true;
			}
		}

		if (velocidad < velocidadMinima) {
			velocidadMinima = velocidad;
			velocidadMinimaCombustible = combustible;
		}

		if (combustible == 'l' && velocidad > 100) {
			contLiquidoMaxVelocidad++;
		}

		if (velocidad > velocidadMaxSolido && combustible == 's') {
			velocidadMaxSolido = velocidad;
		}

		cont++;
	}

	promedioVelocidad = acumVelocidad / cont;

	alert("El promedio de velocidad es de: " + promedioVelocidad + " velocidad minima es de: " + velocidadMinima + " El tipo de combustible de la velocidad mas baja es: " + velocidadMinimaCombustible + " la cantindad de combustible liquidos que superaron los 100 km son: " + contLiquidoMaxVelocidad + " la velocidad mas alta de los combustibles solidos es de: " + velocidadMaxSolido);*/

