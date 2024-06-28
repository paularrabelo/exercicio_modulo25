function somar() {
    let soma = 0;
    
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(10,20, 30))

function somarcomRest(...numeros) {
    const soma = numeros.reduce ((total, numeroAtual) => {
        total += numeroAtual
        return total
    }, 0)
    return soma;
}

console.log(somarcomRest(10,20,30))

// spread

const numeros = [1,2,3,4]

console.log(numeros)
console.log(...numeros)

const timesDeFutebolSP = ['santos', 'palmeiras', 'bragantino', 'sao paulo'];
const timesDeFutebolRJ = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

// const times = timesDeFutebolSP.concat(timesDeFutebolRJ);



const times = [...timesDeFutebolSP, ...timesDeFutebolRJ];

console.log(times)


const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna)


//desestruturação

const motorCarroAna = carroDaAna.motor;

const {motor: motordaAna} = carroDaAna;
const {motor: motordaJulia} = carroDaJulia;

console.log(motordaAna)
console.log(motordaJulia)

const [item1, item2, item3, ...outrosTimes] = times;

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)