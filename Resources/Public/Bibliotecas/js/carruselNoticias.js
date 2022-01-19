var current = 0;

$(document).ready(function() {
    var numImages = 7;
    if (numImages <= 2) {
        $('.siguienteNoticia').css('display', 'none');
        $('.anteriorNoticia').css('display', 'none');
    }

    $('.anteriorNoticia').on('click',function() {
        if (current > 0) {
            current = current - 1;
        } else {
            current = numImages - 2;
        }
        $(".carruselNoticias").animate({"left": -($('#noticia_' + current).position().left)}, 840);
        return false;
    });

    $('.siguienteNoticia').on('click', function() {
        if (numImages > current + 2) {
            current = current + 1;
        } else {
            current = 0;
        }
        $(".carruselNoticias").animate({"left": -($('#noticia_' + current).position().left)}, 840);
        return false;
    });
 });
