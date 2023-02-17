let titulo = document.querySelector(".titulo");
let botaoAdicionar = document.querySelector("#adicionar-paciente")

titulo.textContent = "Aparecida Nutricionista"
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    console.log('opa')

    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var pesoTd = document.createElement("td");
    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    pesoTd.textContent = peso;
    nomeTd.textContent = nome;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
})



var pacientes = document.querySelectorAll(".paciente");
for (let i = 0; i <= pacientes.length; i++) {
    var paciente = pacientes[i];

    //peso
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; //para pegar o valor da td peso com o textContent
    //altura
    var tdAltura = paciente.querySelector(".info-altura"); //USE ASPAS DUPLAS
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    var calculandoImc = peso / (altura * altura);

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        tdImc.textContent = "Peso inválido!"
        console.log(tdImc.textContent);
        paciente.classList.add("paciente-invalido")
    }
    if (altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        tdImc.textContent = "Altura inválida!"
        // paciente.style.color = "red"
        paciente.classList.add("paciente-invalido")
        console.log(tdImc.textContent)
    }
    //se tudo for validado, faça o calculo
    if (pesoValido == true && alturaValida == true) {
        tdImc.textContent = calculandoImc.toFixed(2);
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos"
    }
}
