jQuery(document).ready(function($){
	$('a[rel*="lightbox"]').magnificPopup({
		type: 'image',
		tLoading: 'Cargando imagen...',
		tClose: 'Cerrar [Esc]',
		image: {
			titleSrc: function(item) {
				var title = item.el.attr('title');
				var description = item.el.attr('alt');
				return ((title)?title:'') + ((description)?'<small>'+ description +'</small>':'');
			}
		},
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1],
			tCounter: '%curr% de %total%',
			tPrev: 'Atrás [Flecha izquierda]',
			tNext: 'Adelante [Flecha derecha]'
		},
	});
});