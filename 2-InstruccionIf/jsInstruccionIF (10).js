function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var nota;
	var mensaje;

	nota=((Math.random())*(11-1)+1);
	nota=parseInt(nota);

	//alert(nota);

	if (nota>=9) 
	{
		mensaje=" Excelente";
	}

	else {
		if (nota>=5)

		{
			mensaje=" Aprobo";
		}

		else

		{
			mensaje=" vamos la proxima se puede";
		}


		alert("Su nota es de: " +nota+mensaje);
	}

	

}//FIN DE LA FUNCIÓN


 /*var numero;
 numero= parseInt((Math.random())*(11-1)+1);
                                          alert(numero); 
	//Genero el número RANDOM entre 1 y 10 
if (numero >=9)
{
			alert("exelente");
}	
else if (numero >=5){
	                 alert("aprobó");
}
else if (numero <=4){
	              alert("Mas suerte para la proxima");
}
}//FIN DE LA FUNCIÓN*/