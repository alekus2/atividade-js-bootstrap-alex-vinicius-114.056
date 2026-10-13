# Painel do Aluno / Boletim Escolar 

## Nome e tema do projeto
Este projeto se chama `Boletim Escolar da Unigran` e tem como tema a criação de um painel de desempenho acadêmico para um aluno. A ideia foi apresentar uma interface simples e funcional, simulando uma página de acompanhamento de notas, tarefas e progresso em um curso.

## Explicação da interface criada
A interface foi desenvolvida com HTML ultilizando o Bootstrap 5. A página apresenta:
- uma navbar com acesso às principais seções;
- um título principal e descrição do período letivo;
- um botão para verificar notas;
- uma mensagem de alerta informativa;
- cartões com as disciplinas, suas notas e médias;
- icones indicando se o aluno foi aprovado ou reprovado;
- rodapé estilizado com nome da unigran capital.

O objetivo foi criar uma experiência visual semelhante a um painel institucional, deixando a leitura das informações clara e agradável.

## Componentes Bootstrap utilizados
Foram utilizados vários componentes do Bootstrap para melhorar a estrutura e o design da página, como:
- `navbar` para o menu superior;
- `container` para centralizar o conteúdo;
- `badge` para destacar o período letivo e o status da disciplina;
- `button` para o botão de ação;
- `alert` para exibir avisos ou mensagens informativas;
- `card` para organizar cada disciplina em um bloco visual;
- `row` e `col` para criar a grade responsiva da página;
- `footer` para o rodapé final.

Esses componentes ajudaram a deixar a interface mais profissional, responsiva e fácil de entender.

## Diferença entre `let`, `const` e `var`
Essas são as variáveis em Javascript, mas cada uma possuem comportamentos diferentes:

- `const`: usado para valores que não serão alterados durante o código. Depois de definido, o valor permanece o mesmo.
- `let`: permite a alteração de valor, ou seja, a variável pode mudar ao longo do código.
- `var`: é a forma antiga de declarar uma variável. Diferentemente de `let` e `const`, ela tem escopo de função e pode gerar comportamentos estranhos em blocos de código, por isso hoje é a menos recomendada.

No projeto, `const` foi usado para dados fixos, como nome do aluno, curso e notas; e `let` foi usado quando a quantidade de tarefas concluídas precisava ser atualizada ao longo do código.

## Tipos de dados utilizados
Os principais tipos de dados utilizados no JavaScript para o projeto foram:
- `string`: textos, como nomes e títulos (`"Alek"`, `"Painel do Aluno"`);
- `number`: valores numéricos, como notas e horas (`10`, `7`, `8`);
- `boolean`: valores lógicos (`true` ou `false`);
- `null`: representa ausência de valor (`null`).

Esses tipos foram utilizados para calcular médias, verificar progresso e montar mensagens dinâmicas no console.

## Explicação da condição criada com `if/else`
A condição criada foi baseada na média das atividades do aluno:

```javascript
if (media >= 6) {
    console.log("Resultado: aprovado! Continue estudando.");
} else {
    console.log("Resultado: precisa revisar o conteúdo.");
}
```

Essa estrutura verifica se a média é maior ou igual a 6. Se a condição for verdadeira, o aluno é considerado aprovado; caso contrário, o código entra no bloco `else` e mostra que ele precisa revisar o conteúdo.

A lógica foi aplicada para demonstrar como decisões em JavaScript podem controlar o fluxo do programa de acordo com valores calculados.

## Maior dificuldade encontrada
A maior dificuldade foi entender como combinar a estrutura HTML com os elementos dinâmicos do Bootstrap para que o projeto ficasse visualmente organizado e funcional ao mesmo tempo. Tive dificuldade em criar uma página 100% responsiva.

## Como a dificuldade foi resolvida
A dificuldade foi resolvida por meio de planejamento e prática gradual:
- testando os elementos do bootstrap e suas condições para inserir no HTML em conjunto com a ferramenta de desenvoledor do navegador;
- aplicando componentes do Bootstrap para estruturar melhor a interface;
- ajustando os detalhes visuais para manter a página clara e responsiva.

Com isso, foi possível transformar a ideia inicial em uma página funcional, organizada e com uma apresentação mais profissional.
