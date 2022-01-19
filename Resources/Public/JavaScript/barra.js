scrollIntervalID = setInterval(fijarBarra, 100);

function fijarBarra() {
	$('#menuBuscador').offset({left:$('.logoBuscador').position().left});
	if ($(window).scrollTop() >= $('.barraTop').offset().top) {
		$('.barra').addClass('barraFija');
		if ($('.barra').css('display') != 'none') {
			$('.contenidoPrincipal').css('margin-top',$('.barra').innerHeight());
		}
		$('#menuBuscador').css('top',43);
    }
    else {
    	$('.barra').removeClass('barraFija');
		$('.contenidoPrincipal').css('margin-top',0);
		if ($(window).width() > 790) {
			$('#menuBuscador').css('top',83);
		}
		else {
			$('#menuBuscador').css('top',43);
		}
    }
}