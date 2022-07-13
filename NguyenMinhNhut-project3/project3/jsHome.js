var modalMenu = document.getElementById("mdmenu");

var btnMdMenu = document.getElementById("idTg");

var spanMenu = document.getElementsByClassName("close-md-menu")[0];

btnMdMenu.onclick = function() {
    modalMenu.style.display = "block";
}

spanMenu.onclick = function() {
    modalMenu.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalMenu) {
        modalMenu.style.display = "none";
    }
}