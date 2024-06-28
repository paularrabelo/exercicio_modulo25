const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(rede){
    console.log(`Eu tenho perfil na rede social: ${rede}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
    
})

console.log(alunos2)

const numeros = [1, 2, 3, 4, 5]
const dobroNumeros = numeros.map(function(numeroAtual){
    return numeroAtual * 2;
})

console.log(dobroNumeros)

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula'
})

console.log(paula)

const indicepaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula'
})

console.log(indicepaula)

alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
}) 

const alunosFrontend = alunos2.every(function(item){
    return item.curso === 'Frontend'
})

console.log(alunosFrontend)

const alunosBackend = alunos2.some(function(item){
    return item.curso === 'Backend'
})

console.log(alunosBackend)

const fullStack = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(fullStack)

const alunosdeBack = alunos2.filter(function(item) {
    return item.curso === 'Backend'
})

console.log(alunosdeBack)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador
}, 0)

console.log(soma)

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')

console.log(nomesDosAlunos)