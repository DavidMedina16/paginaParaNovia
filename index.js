function mostrarItinerario() {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('itinerario').classList.remove('oculto');
}

function mostrarEmoji() {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('emoji').classList.remove('oculto');
}

function mostrarDia(dia) {
    const dias = ['sabado', 'domingo', 'lunes'];
    dias.forEach(function(d) {
        document.getElementById(d).classList.add('oculto');
    });
    document.getElementById(dia).classList.remove('oculto');
}
