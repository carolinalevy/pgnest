function displayTurno() {
    let turno = JSON.parse(window.sessionStorage.getItem('turnoNuevo'));
    let medico = document.getElementById('nombreMedico');
    let fecha = document.getElementById('nombreFecha');
    let horario = document.getElementById('nombreHorario');
    let cobertura = document.getElementById('nombreCobertura');

    medico.innerHTML = turno.medico;
    fecha.innerHTML = turno.dia;
    horario.innerHTML = turno.horario;
    cobertura.innerHTML = turno.cobertura;

   // window.sessionStorage.removeItem('turnoNuevo');
}



displayTurno();