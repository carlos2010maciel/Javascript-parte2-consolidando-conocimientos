var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPacientes(form);
    var pacienteTr = construirTr(paciente);

    if (!validarPaciente(paciente)) {
        console.log("Paciente incorrecto");
        return; //hace alusión a lla función anónima
    }
    //Validar paciente
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
    form.reset(); //Para que luego de hacerclick el formulario quede vacío

});

function capturarDatosPacientes(form) {
    //capturando los datos del formulario

    var paciente = { //creo la clase paciente
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function construirTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Asignación al tr de los td, y la tabla el tr
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function construirTd(dato, clase) {
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarPaciente(paciente) {
    if (validarPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}