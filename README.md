javascript:
    
    A forma de pesquisar somente a tag <h1>. Usaremos o método querySelector(), passando como parâmetro o que queremos encontrar - neste caso, entre aspas.
    É uma boa prática não buscarmos por uma tag HTML específica, e usar outras opções que a função querySelector() nos disponibiliza. Como por exemplo:
    Além das tags HTML, o querySelector() nos permite buscar por um elemento por meio da classe, do id, ou seja, dos seletores CSS. Vamos testar esse recurso adicionando uma classe dentro do <h1>:
    a função query selector mostra apenas uma classe (se vc tivesse várias, irá mostra apenas a primeira)
    por isso existe a query selector all
    o query selector retorna um objeto
    ..

    

    
    
    CTRL + SHIFT + J abre o console do desenvolvedor

    Informação sobre DOM
        O document é uma variável muito importante do Javascript. Ela contém o DOM ou Document Object Model, que é como o navegador enxerga o HTML utilizado por ele para renderizar a página.

        O navegador, ao ler o seu arquivo HTML, cria uma cópia em memória daquele HTML e a partir dessa cópia ele vai desenhando a sua página, colocando as tags e aplicando os estilos. Esta cópia é o que chamamos de DOM uma representação em memória do HTML do seu arquivo, que o navegador usa para desenhar a página, e a variável document é quem contêm o DOM.

        Por isso, quando dizemos que com o Javascript nós estamos manipulando o DOM, estamos manipulando o que o navegador renderizou. Então ao trocar algum texto do DOM, o navegador imediatamente desenha novamente aquele texto, pois o DOM é o que o navegador usa para desenhar o seu site.

        Outra caracteristica interessante, é que como manipulamos o DOM , quando trocamos um texto de um <h1> ou um estilo de um elemento, na verdade estamos alterando a representação em memória , o que faz com que o arquivo fonte que contêm seu HTML fique intacto!

  Algumas tags, como h1, h2, p e span, possuem um conteúdo de texto. E para altera-las no JavaScript use uma propriedade que nos permite acessá-lo: textContent.
      ?qual a diferença entre innerhtml e textcontent?

        Pode fazer uma outra query selector onde já se utilizou uma query selector 
        Acessando elementos dentro de outro elemento
        var paciente = document.querySelector("#primeiro-paciente");
        //peso
        var tdPeso = paciente.querySelector(".info-peso");
        !para fazer uma busca especifica é importante criar um id e utlizado e não uma classe já existente!

        revisar ou and operadores logicos 

        toFixed(), que recebe como parâmetro a quantidade de casas decimais a serem exibidas depois do 
        paragrafo.style.color = "rgb(0,0,255)";
        sempre que uma tag css tiver duas palavras para escrever com js usa o metodo de escrita camelCase
        O correto é usar o padrão camelCase quando estamos tentando acessar um estilo que possuí duas palavras no CSS.

                
        Quando selecionamos um elemento com as funções de querySelector, elas nos devolvem um objeto que tem algumas propriedades especiais, que falam sobre as características do HTML selecionado. Uma dessas propriedades é a .classList, que como o nome indica nos mostras classes que aquele HTML tem.

        não é recomendado usar o style no js, cada arquivo/pasta tem sua função e a do js é de manipular elementos
        A boa prática de não alterar o estilo diretamente no Javascript e sim modificar as classes dos elementos com a propriedade .classList

        Nada acontece quando adicionamos um addEventListener("evento", funcaoSemParametros())  => porque como a função não retorna nada, o código que será executado será igual a nada quando o evento for disparado
 
        o .value é o que recebe entrada do usuário possui a propriedade value (como input)
        event.preventDefault() preveni o comportamento padrão do evento (se fosse um botão, ele deixaria de recarragar a página)

        A função responsável por criar elementos no Javascript é a createElement()
        Para ter acesso aos inputs do form, e só colocar por exemplo form.nome onde ira pegar o input q tiver com o (id ou o nome?)como se os inputs fossem propriedades do form.
        E extrair o valor do input com o .value e adicionar o que foi escrito com textContent ex:
        var nome = form.nome.value;
        var nomeTd = document.createElement("td"); esse serve para adicionar uma tag no html
        nomeTd.textContent = nome;
        .appendChild : serve para adicionar um filho (logo a tag tem que ser pai)
        pacienteTr.appendChild(nomeTd); pacienteTr é Tr de uma tabela e ira adicionar uma Td como filho.
        é possivel adicionar mais de uma função no addEventListener:
          botao.addEventListener('click', botaoHandler);
          botao.addEventListener('click', outroHandler);

      boas praticas js:
      nn ter um arquivo js gigante com varias funçoes, é uma boa pratica quebrar o arquivo grande e em cada arquivo colocar sua funcionalidade especifica. 

      Sabemos que quebrar uma grande função complexa é uma boa prática por causa de diversos fatores, mas podemos citar como os principais deles:

Dar manutenção ao código fica muito mais fácil, visto que agora podemos examinar vários pequenos blocos , que são muito mais fáceis de compreender do que um grande bloco de texto
Ao quebrar uma grande função, também estamos deixando ela com menos responsabilidades, com a meta de atingir o ideal de que cada função tenha apenas uma única responsabilidade.
O código também fica muito mais fácil de testar, pois se temos diversas funções pequenas conseguimos ir testando uma a uma em busca de erros ou bugs do código.
E por último, a legibilidade do código aumenta muito, pois dando nomes semânticos a cada uma das funções menores conseguimos deixar bem claro o que aquela parte do código deve fazer e facilita o entendimento do todo como um geral.

Dividir o código, separando por funcionalidades do sistema
Os objetos em Javascript
A quebrar funções grandes em funções menores ,com cada uma com sua responsabilidade
A função form.reset() para limpar o formulário


    O browser, ao carregar a página HTML, vai lendo linha por linha, de cima para baixo. Quando ele chega na tag <script>, ele tenta buscar um h1 na página, porém, isto não está carregado em sua memória. A tag <h1> está abaixo do código JavaScript e ainda não foi interpretado pelo navegador, logo, ele não poderá ser selecionado. sendo assim o retorno será null. Por isso é necessario adicionar a tag script no em dentro  e final do body
    Assim como o CSS é uma boa pratica e organização adicionar um arquivo externo para o javascript
    A tag <script> continuará na página index.html, porém, ela não ficará vazia, e apontará para o arquivo JavaScript externo que criamos, por meio do atributo src (referente ao termo source).


    Além do for, existe outro tipo de iteração, o forEach(), o qual não precisamos delimitar, e que passará por todos os elementos. Para cada item do array, será realizada uma ação.
     erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
    erros: é o array onde vai passar o for.

    Com a propriedade innerHTML, podemos obter o conteúdo HTML (HTML interno) de um elemento.
    Quando utilizada para obter o HTML interno de um elemento, seu retorno é uma String, que representa todo o conteúdo HTML do próprio elemento.
    Com a propriedade innerHTML, podemos editar o conteúdo HTML (HTML interno) de um elemento.

evento de duplo clique, o dblclick:
paciente.addEventListener("dblclick", function() {

    });
evento para três cliques
    window.addEventListener('click', function (evt) {
    if (evt.detail === 3) {
        alert('triple click!');
    }
});
event.detail:
A count of consecutive clicks that happened in a short amount of time, incremented by one.
A função do JavaScript responsável por remover um elemento do HTML é a remove()
O this é uma palavra de contexto ligada com quem acionou o evento, a quem o evento está atrelado. Como o evento está atrelado ao paciente, o this fará referência a ele.
 paciente.addEventListener("dblclick", function() {
        this.remove();
    });
diferença entre o this e o target
this é o dono do evento
target é quem sofreu o evento em si
testa usando
 console.log(event.target)
        console.log(this)
parentNode: pega o pai do evento com alvo
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;

setTimeout: função que determina tempo que algo aconteça, com o parametro de tempo de milissegundos ex: 500 milissegundos = a meio segundo.
tagName = captura o nome da tag e deixa maiuscula
document.querySelector('h1').tagName
 // Somente executará nosso código caso o elemento em que clicamos seja um <td>
    if (event.target.tagName == 'TD') {
        event.target.parentNode.remove()
    }