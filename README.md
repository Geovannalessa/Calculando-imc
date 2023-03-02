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
    a cada digitada que se dar no input, dá para capturar com uma função
    campoFiltro.addEventListener("input", function() {
        LEIA TUDO ANTES DE ESCREVER
    Expressoes regulares: compara letra por letra. são um tipo especial de texto, que nos auxilia a buscarmos por strings, facilitando quando o termo for maior. Pode ser uma busca simples, como no nosso caso, em que queremos identificar quais nomes contêm determinadas letras; ou casos complexos, se queremos pesquisar se o parágrafo contém a palavra "nome", por exemplo, é como quando os editores de texto buscam por uma palavra usando o comando "CTRL + F".
    var expressao = new RegExp();
    Recebe dois parametros o primeiro o texto que queremos buscar, no caso, o termo digitado no campo de busca (this.value), e o segundo parâmetro será referente às características dos termos que devem ser buscados. É importante que a busca não seja case sensitive, que é a diferenciação entre letras maiúsculas e minúsculas. Devem ser buscadas tanto letras maiúsculas como minúsculas, e passaremos a letra "i" como segundo parâmetro, para indicarmos a opção case insensitive:
     vamos pedir para a expressão regular verificar se um pedaço do nome do paciente possui as letras digitadas no campo de busca. Para isso, a expressão regular tem o método test(), com a qual passaremos o que queremos testar
      var expressao = new RegExp(this.value, "i"); 
            if (expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
    
    Esse teste irá retornar verdadeiro caso o nome contenha a expressão, ou falso caso não contenha. Como estamos testando se o nome não contém a expressão (por isso adicionaremos a classe invisivel), utilizaremos novamente o operador de negação (!). Logo, se o teste falhar, adicionaremos a classe; se não, ela será removida:

    O primeiro parâmetro que devemos passar para o construtor é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque). Por exemplo, podemos definir que não queremos que haja distinção entre letras maiúsculas e minúsculas, através da flag i.

Neste capítulo aprendemos:

O novo evento de input
O truque de deixar invisível adicionando uma classe com display:none
Como realizar uma busca, escondendo todos os elementos e mostrando apenas aqueles que nos interessam
Como buscar por apenas um pedaço de uma palavra com as Expressões Regulares em Javascript
Mas há um modo de fazer essa comparação sem a necessidade de utilizar expressões regulares! Podemos utilizar a função substring, que recebe dois parâmetros, fazendo com que ela devolva parte da string, com o tamanho definido nos parâmetros. O primeiro parâmetro é o início, começando do 0 (que representa o primeiro caractere). O segundo parâmetro define o fim (exclusivo, mostramos até o penúltimo caractere). Por exemplo:
var string = "Alura";
var resultado = string.substring(1, 4);
Extraímos uma string que começa no segundo caractere (número 1) e termina no quarto caractere (número 3, índice anterior ao número 4).
var comparavel = nome.substr(0, this.value.length);
var comparavelMinusculo = comparavel.toLowerCase();
var valorDigitadoMinusculo = this.value.toLowerCase();

if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
    paciente.classList.add("invisivel");
} else{
    paciente.classList.remove("invisivel");
}

Como fazer uma requisição assíncrona com o Javascript
O objeto XMLHttpRequest
Como configurar e enviar uma requisição
O evento de load
O que é a técnica AJAX.
O formato JSON
Como converter JSON para um objeto Javascript com a função JSON.parse()
Como lidar com erros durante o AJAX
O objeto XMLHttpRequest é quem é responsável por fazer requisições HTTP assíncronas com Javascript. Apesar de ter o XML no nome hoje em dia este objeto pode trafegar diversos outros tipos de dados além do XML, este nome só se manteve devido a um legado histórico.

E para instanciar um novo Objeto XMLHttpRequest devemos utilizar a sintaxe com a palavrinha new :

var xhr = new XMLHttpRequest();
Dado que temos um XMLHttpRequest, precisamos configurar nossa requisição para dizer para qual servidor queremos enviá-la e também qual método HTTP devemos usar.

Fazemos isto através do método .open() , passando o método e a url :

xhr.open("POST","www.xyz.com.br/compras");
Os dados possuem uma estrutura parecida com o objeto do JavaScript porque eles estão no formato JSON (sigla de JavaScript Object Notation), um formato de dados parecidos com os objetos do JavaScript que podemos transportar pela web.

A semelhança é tanta que podemos facilmente converter JSON (o texto da resposta da requisição) em objetos do JavaScript com os quais estamos mais acostumados a utilizar, como array ou mesmo uma string. Queremos que ele seja transformado em um array de objetos, mais útil para o JS.

Para conseguirmos transformar a resposta, que é um texto (uma string), em um array de pacientes, usaremos um "transformador", mais precisamente um parseador de JSON para objetos do JavaScript. Para realizarmos esta tarefa usaremos o método parse(). Assim, receberemos o texto em JSON, que depois será parseado. Em seguida, será retornado um objeto JavaScript. Como nossa resposta se parece com um objeto, o método entenderá isso e nos retornará um array do objetos:


typeof mostra o tipo de dado é o componente selecionado
 var numero = 1;
    console.log( typeof numero)

AJAX = A técnica utilizada nessa aula é conhecida como AJAX, essa maneira de fazer uma requisição de forma assíncrona com JavaScript.É uma requisição assíncrona porque não está parando o fluxo do código, ou seja, no momento em que a requisição é feita, a execução continua normalmente. Durante esse processo de busca de pacientes no servidor externo, é possível excluir e adicionar pacientes.

Nesta aula aprendemos o suficiente para fazermos requisições para outros servidores, usamos o método open() para abrir a requisição e configurarmos o método GET para o seu envio. O send() é o método que efetivamente envia a requisição, após o qual devemos escutar a resposta para sabermos quando ela retornar no responseText. Em seguida, ela será "parseada" com o JSON.parse, se a resposta for recebida no formato JSON - texto com "cara" de JavaScript.

Abordamos vários assuntos sobre a linguagem, sobre como utilizar as funções que já conhecemos para fazermos uma requisição e como integrar dois sistemas.