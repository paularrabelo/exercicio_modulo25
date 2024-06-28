let meuMap = new Map ();
meuMap.set("nome", "Paula");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("nome"));

console.log(meuMap.size);

for ( let chave of meuMap.keys()){
    console.log(chave);
}

for ( let valor of meuMap.values()){
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap)

//set

const cpfs = new Set ();
cpfs.add('65423753090')
cpfs.add('31270767038')
cpfs.add('84986196022')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Gian Souza', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza']

const arrayComoSet = new Set([...array])

console.log(arrayComoSet)

const arraySemDuplicados = [...arrayComoSet]

console.log(arraySemDuplicados)