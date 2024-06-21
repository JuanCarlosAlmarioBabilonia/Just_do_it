function actualizarHora() {
    let fechaHoraActual = new Date();
    let fecha = fechaHoraActual.toLocaleDateString();
    let hora = fechaHoraActual.toLocaleTimeString();

    let elementoFechaHora = document.getElementById('fechaHora');
    elementoFechaHora.textContent = `${fecha}, ${hora}`;
  }

  actualizarHora();
  setInterval(actualizarHora, 1000);