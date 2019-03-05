function mostrar()
{
	var checkConfirm = true;
	var numero:
	var letra;
	var cantidadPares=0;
	var cantidadImpares=0;
	var cantidadCeros=0;
	var CantidadPositivo;
	var PromedioPositivos;
	var sumaNegativos=0;
	

	}
	/*var checkConfirm = true;
	var nombrePaisOk;
	var nombrePais;
	var extensionTerritorial;
	var contadorPais = 0;
	var acumuladorExtensiones = 0; 
	var superficieIgualCien = 100;
	var contadorPar = 0;
	var contadorPaisMenor = 0;
	var contadorPaisCien = 0;
	var fisrtName = '';
	var firstCountry = true;
	var promedio = 0;
	var menorTerritorio = 0;
	var nombreMenorTerritorio = '';
	var territorioComparacion = true;

	
	
	

	while(checkConfirm) {
		nombrePaisOk = false;

		while(!nombrePaisOk) {
			 nombrePais = prompt("Ingrese el nombre del país:");

			if (typeof nombrePais === 'string' && nombrePais.length > 3) {
				nombrePaisOk = true;
			} else {
				alert("Debe ingresar un nombre de pais valido");
			}
		}

		var superficieOK = false;

		while(!superficieOK) {
			extensionTerritorial = prompt("Ingrese la extensión territorial");
			extensionTerritorial = parseInt(extensionTerritorial);

			if (typeof extensionTerritorial === 'number' && extensionTerritorial > 0) {
				acumuladorExtensiones += extensionTerritorial;

				if (territorioComparacion) {
					menorTerritorio = extensionTerritorial;
					territorioComparacion = false;
				}

				superficieOK = true;
			} else {
				alert("Debe ingresar una extensión válida");
			}
		}

		if (extensionTerritorial % 2 != 0) {
			contadorPar++;
		}

		if (extensionTerritorial < superficieIgualCien) {
			contadorPaisMenor++;
		}

		if (extensionTerritorial === superficieIgualCien) {
			contadorPaisCien++;
		}

		if (extensionTerritorial > 100 && firstCountry) {
			fisrtName = nombrePais;
			firstCountry = false;
		}

		if (extensionTerritorial < menorTerritorio) {
			menorTerritorio = extensionTerritorial;
			nombreMenorTerritorio = nombrePais;
		}

		contadorPais++;

		checkConfirm = confirm("¿Desea continuar?");
		
	}

	promedio = acumuladorExtensiones / contadorPais;

	document.write("la cantidad de paises con superficie impar son: " +contadorPar+ " la cantidad de paises con superficie menor a 100 son: " +contadorPaisMenor+ " la cantidad de paises con superficie igual a 100 son: " +contadorPaisCien+ " El nombre del primer pais que supero los 100: " +fisrtName+ " el promedio de KM imgresados es de: " +promedio+ " el nombre del que menos territorio tiene es: " +nombreMenorTerritorio);*/

