function mostrar()
{
//tomo la edad  

	var edad;
   var edoCivil;

   edad=document.getElementById('edad').value;
   edoCivil=document.getElementById('estadoCivil').value;

   edad=parseInt(edad);

   if(edad >=18 && edoCivil=="Soltero"){

   	alert("Es soltero y no es menor");
   }


}//FIN DE LA FUNCIÓN