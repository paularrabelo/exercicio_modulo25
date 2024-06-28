class alunos {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const alunosEnotas = [
    new alunos('João', 6),
    new alunos('Fabricio', 7),
    new alunos('Gabriela', 10),
    new alunos('Heitor', 8),
    new alunos('Iara', 5),
    new alunos('Julia', 9),
    new alunos('Maria', 10),
    new alunos('Rafael', 4),
];

console.log(`\n Listagem dos alunos e suas respectivas notas: \n`)
alunosEnotas.forEach(alunos => {
    console.log(`${alunos.nome} tirou a nota ${alunos.nota}`)
});

function aprovados (alunosEnotas) {
    return alunosEnotas.filter(alunos => alunos.nota >= 6)
};

function reprovados (alunosEnotas) {
    return alunosEnotas.filter(alunos => alunos.nota < 6)
};

const listaDosAprovados = aprovados(alunosEnotas);
console.log('\n A lista de Aprovados: \n')
listaDosAprovados.forEach(alunos => {
    console.log(`${alunos.nome} - aprovado`)
});

const listaDosReprovados = reprovados(alunosEnotas);
console.log('\n A lista de Reprovados:\n')
listaDosReprovados.forEach(alunos => {
    console.log(`${alunos.nome} - reprovados`)
})


