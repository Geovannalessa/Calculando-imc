let botaoAdicionar = document.querySelector("#adicionar-paciente")

titulo.textContent = "Aparecida Nutricionista"
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    console.log('opa')

    var form = document.querySelector("#form-adiciona");
    //função para extrair informações com o form
    var paciente = obtemPacienteDoFormulario(form);

    //função que cria a tr e td do paciente
    var pacienteTr = montaTr(paciente);

    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
    form.reset();
})
function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}
function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}