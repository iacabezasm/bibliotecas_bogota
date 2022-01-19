function mostrarOcultar(id,t) {
	// muestra el elemento con id determinado si está oculto, o lo oculta si está visible, y lo oculta después de t milisegundos
	var elemento = document.getElementById(id);
	elemento.style.display = (elemento.style.display != 'none' ? 'none' : '' );
	cont = setTimeout(function() {
		elemento.style.display = 'none';
	}, t);
}
function popupFilbo() {
	var data = [{
		userWebsite_href: 'http://editorial.unal.edu.co/filbo2017',
		img_img: 'http://editorial.unal.edu.co/fileadmin/recursos/editorial/eventos/filbo2017/imgs/editorialun-filbo2017-abril25_a_mayo5.png',
	}];
	$.magnificPopup.open({
		items: data,
		type: 'inline',
		tLoading: 'Cargando imagen...',
		tClose: 'Cerrar [Esc]',
		inline: {
			markup: '<div style="position:relative;background:none;padding:0;width:auto;max-width:750px;margin:0 auto;text-align:center;"><div class="mfp-close"></div>'+'<a class="mfp-userWebsite" target="_blank">'+'<div class="mfp-img">+</div>'+'</a>'+'</div>'
		}
	},0);
}