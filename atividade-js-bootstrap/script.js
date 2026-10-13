console.log("Meu primeiro script foi executado!");
console.log("Projeto: Painel do Aluno");
console.log("Soma:", 10 + 5);

const nomeAluno = "Alek";
const curso = "Desenvolvimento Web";
const totalTarefas = 10;
let tarefasConcluidas = 7;

console.log("Tarefas concluídas atualmente:", tarefasConcluidas);
tarefasConcluidas = tarefasConcluidas + 1; //fiz uma tarefa
console.log("Tarefas concluídas atualmente:", tarefasConcluidas);

var exemploAntigo = "Declaração utilizada em códigos antigos";
console.log(exemploAntigo);

const tituloPainel = "Painel do Aluno"; // string
const horasDoAluno = 2; // number
const alunoMatriculado = true; // boolean
const proximaObservacao = null; // null

console.log("Tipos de dados:", tituloPainel, horasDoAluno, alunoMatriculado, proximaObservacao);

const horasPlanejadas = 8;
const horasEstudadas = 2;
const horasRestantes = horasPlanejadas - horasEstudadas;
const sessoesNaSemana = 4;
const minutosNaSemana = horasDoAluno * sessoesNaSemana;
const horasNaSemana = minutosNaSemana / 60;
const metaAtingida = horasEstudadas >= horasPlanejadas;
const tarefasEmDia = tarefasConcluidas <= totalTarefas;
const cursoWeb = curso === "Desenvolvimento Web";

console.log("Horas restantes para a meta:", horasRestantes);
console.log("Horas de estudo planejadas nas sessões:", horasNaSemana);
console.log("A meta de horas foi atingida?", metaAtingida);
console.log("As tarefas estão dentro do total?", tarefasEmDia);
console.log("O curso é Desenvolvimento Web?", cursoWeb);

const resumoEstudos = `Olá, ${nomeAluno}! No curso de ${curso}, você concluiu ${tarefasConcluidas} de ${totalTarefas} tarefas.`;
console.log(resumoEstudos);

const nota1 = 6;
const nota2 = 7;
const media = (nota1 + nota2) / 2;

console.log(`A média das atividades é ${media}.`);
if (media >= 6) {
    console.log("Resultado: aprovado! Continue estudando.");
} else {
    console.log("Resultado: precisa revisar o conteúdo.");
}