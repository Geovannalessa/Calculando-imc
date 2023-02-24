let titulo = document.querySelector(".titulo");
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
    var imc = peso / (altura * altura);

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("peso invalido")
        pesoValido = false;
        tdImc.textContent = "Peso inválido!"
        paciente.classList.add("paciente-invalido")
    }
    if (!alturaValida) {
        alturaValida = false;
        tdImc.textContent = "Altura inválida!"
        // paciente.style.color = "red"
        paciente.classList.add("paciente-invalido")
        console.log(tdImc.textContent)
    }
    //se tudo for validado, faça o calculo
    if (pesoValido == true && alturaValida == true) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos"
    }
}
function validaPeso(peso){
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
function calculaImc(peso,altura){
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}
