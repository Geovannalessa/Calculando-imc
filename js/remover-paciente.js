var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table")
tabela.addEventListener('dblclick', function(event){
    //para evitar de remover o cabeçalho
    if(event.target.tagName == 'TD'){
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function(){
        event.target.parentNode.remove();
        },500)
    }
    
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;
    // paiDoAlvo.remove()
    // })
})