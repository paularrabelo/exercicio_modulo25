const minhaFuncao = () => "Diz oi";

const retornaCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
})
console.log(minhaFuncao())
console.log(retornaCarro())

const carro = {
    velocidadeAtual : 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },

    frear: function() {
        this.velocidadeAtual -=10;
    }
}

carro.acelerar();
console.log(carro.velocidadeAtual)
carro.frear();
console.log(carro.velocidadeAtual)