let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelector("#primeiro-paciente");
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

if(peso <= 0 || peso >= 1000){
    pesoValido = false;
    tdImc.textContent = "Peso inválido!"
    console.log(tdImc.textContent)
}
if(altura <= 0 || altura >= 3.00){
    alturaValida = false;
    tdImc.textContent = "Altura inválida!"
    console.log(tdImc.textContent)
}
//se tudo for validado, faça o calculo
if(pesoValido==true && alturaValida == true){
    tdImc.textContent = calculandoImc;
}


