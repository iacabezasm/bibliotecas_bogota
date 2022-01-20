function soloMostrar(seleccion) {
	// copia el contenido del campo de texto en todos los campos
	var campo = document.getElementsByClassName("campo");
	var texto = "";
	var x;
	
	for (x = 0; x < campo.length; x++)
	{
		if (campo[x].parentNode.style.display == "flex")
		{
			if (campo[x].value)
			{
				texto = campo[x].value;
			}
		}
	}
	
	for (x = 0; x < campo.length; x++)
	{
		campo[x].value = texto;
	}
	
	// oculta todos los elementos de la clase 'buscador' y muestra el de la selección
	document.getElementsByClassName("hermes")[0].style.display = "none";
	document.getElementsByClassName("bdigital")[0].style.display = "none";
	document.getElementsByClassName("descubridor")[0].style.display = "none";
	document.getElementsByClassName("revistas")[0].style.display = "none";
	document.getElementsByClassName("libreria")[0].style.display = "none";
	document.getElementsByClassName(seleccion)[0].style.display = "flex";
	
	// oculta el elemento activo de la lista desplagable
	document.getElementById("opcionhermes").style.display = "block";
	document.getElementById("opcionbdigital").style.display = "block";
	document.getElementById("opciondescubridor").style.display = "block";
	document.getElementById("opcionrevistas").style.display = "block";
	document.getElementById("opcionlibreria").style.display = "block";
	document.getElementById("opcion" + seleccion).style.display = "none";
	
	// cambia la imagen del buscador
	// document.getElementById("imgBuscador").setAttribute("src","typo3conf/ext/bibliotecas_bogota/Resources/Public/Images/iconos/buscador/" + seleccion + ".png");
}

var cont;

function activar(buscador) {
	mostrarOcultar("menuBuscador",12000);
	clearTimeout(cont);
	soloMostrar(buscador);
}