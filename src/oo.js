// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     this.tipo = tipo;
// }

// const pikachu = new Pokemon ("Pikachu", "elétrico")

class Pokemon {
    #hp = 100;

    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar(ataque) {
        console.log(`${this.nome} atacou com ${ataque}`);
    }

    recebeuAtaque () {
        this.#hp -=10;
    }

    exibeHp () {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor(){
        super('Pikachu', 'Elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

const pikachuDoAsh = new Pikachu();
pikachuDoAsh.recebeuAtaque()
pikachuDoAsh.atacar()
pikachuDoAsh.exibeHp()



const pikachu = new Pokemon ('Pikachu', 'Elétrico');
// pikachu.atacar('choque do trovao')
console.log(pikachu);
console.log(pikachuDoAsh);
