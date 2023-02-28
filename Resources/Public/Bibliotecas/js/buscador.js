function seleccionBuscador(idBuscador, idCampoBuqueda) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("contenidoBuscador");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("pestanaBuscador");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(idBuscador).style.display = "block";
    document.getElementById(idBuscador).classList.add("active");
    document.getElementById(idBuscador + 'Boton').classList.add("active");
    document.getElementById(idCampoBuqueda).focus();
} 