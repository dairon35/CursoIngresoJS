function mostrar()
{
//tomo la edad  

	var edad;
	var mensaje;

	edad=document.getElementById('edad').value;

	edad=parseInt(edad);

	if (edad >=18)
	{

		mensaje=("Mayor de edad");
	}

	else
	{

		if (edad >=13)
		{

			mensaje=("Adolescente");
		}
	

	else
	{
		mensaje=("es un niño");

	}

	alert(mensaje);


}


}



	//if (edad <13) {


		//alert("niño");
	//}
			

	//if (edad <13)  {

		//alert("usted es un niño");

	//}
	//else{

		//if (edad <17) {

	//		alert("usted es un adolescente");	
	//	}
	//	else
	//	{
	//		alert("mayor de edad");
	//	}
		
		
//	}

	
	


	

//FIN DE LA FUNCIÓN