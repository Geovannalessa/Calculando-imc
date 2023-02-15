javascript:
    
    A forma de pesquisar somente a tag <h1>. Usaremos o método querySelector(), passando como parâmetro o que queremos encontrar - neste caso, entre aspas.
    É uma boa prática não buscarmos por uma tag HTML específica, e usar outras opções que a função querySelector() nos disponibiliza. Como por exemplo:
    Além das tags HTML, o querySelector() nos permite buscar por um elemento por meio da classe, do id, ou seja, dos seletores CSS. Vamos testar esse recurso adicionando uma classe dentro do <h1>:

    O browser, ao carregar a página HTML, vai lendo linha por linha, de cima para baixo. Quando ele chega na tag <script>, ele tenta buscar um h1 na página, porém, isto não está carregado em sua memória. A tag <h1> está abaixo do código JavaScript e ainda não foi interpretado pelo navegador, logo, ele não poderá ser selecionado. sendo assim o retorno será null. Por isso é necessario adicionar a tag script no em dentro  e final do body

    Algumas tags, como h1, h2, p e span, possuem um conteúdo de texto. E para altera-las no JavaScript use uma propriedade que nos permite acessá-lo: textContent.
    ?qual a diferença entre innerhtml e textcontent?

    Assim como o CSS é uma boa pratica e organização adicionar um arquivo externo para o javascript
    A tag <script> continuará na página index.html, porém, ela não ficará vazia, e apontará para o arquivo JavaScript externo que criamos, por meio do atributo src (referente ao termo source).
    
    CTRL + SHIFT + J abre o console do desenvolvedor

    Informação sobre DOM
        O document é uma variável muito importante do Javascript. Ela contém o DOM ou Document Object Model, que é como o navegador enxerga o HTML utilizado por ele para renderizar a página.

        O navegador, ao ler o seu arquivo HTML, cria uma cópia em memória daquele HTML e a partir dessa cópia ele vai desenhando a sua página, colocando as tags e aplicando os estilos. Esta cópia é o que chamamos de DOM uma representação em memória do HTML do seu arquivo, que o navegador usa para desenhar a página, e a variável document é quem contêm o DOM.

        Por isso, quando dizemos que com o Javascript nós estamos manipulando o DOM, estamos manipulando o que o navegador renderizou. Então ao trocar algum texto do DOM, o navegador imediatamente desenha novamente aquele texto, pois o DOM é o que o navegador usa para desenhar o seu site.

        Outra caracteristica interessante, é que como manipulamos o DOM , quando trocamos um texto de um <h1> ou um estilo de um elemento, na verdade estamos alterando a representação em memória , o que faz com que o arquivo fonte que contêm seu HTML fique intacto!