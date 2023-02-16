let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i <= pacientes.length; i++){
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
    
    if(peso <= 0 || peso >= 1000){
        pesoValido = false;
        tdImc.textContent = "Peso inválido!"
        console.log(tdImc.textContent);
        paciente.classList.add("paciente-invalido")
    }
    if(altura <= 0 || altura >= 3.00){
        alturaValida = false;
        tdImc.textContent = "Altura inválida!"
        // paciente.style.color = "red"
        paciente.classList.add("paciente-invalido")
        console.log(tdImc.textContent)
    }
    //se tudo for validado, faça o calculo
    if(pesoValido==true && alturaValida == true){
        tdImc.textContent = calculandoImc.toFixed(2);
    }else{
        tdImc.textContent = "Altura e/ou peso inválidos"
    }
}


