var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var paciente = capturarDatosPacientes(form);

    var tabla = document.querySelector("#tabla-pacientes");

    //Crear los td y un tr
    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    //Asignar valores a la propiedad textContent
    nombreTd.textContent = paciente.nombre;
    alturaTd.textContent = paciente.altura;
    pesoTd.textContent = paciente.peso;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    //Asignación al tr de los td, y la tabla el tr
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);

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