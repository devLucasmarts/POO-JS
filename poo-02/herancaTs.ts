class Humano {

    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };

    falar() {
        console.log(`Eae, me chammo ${this.nome}`);
    };
};

// Subclasse ou classe filha
class Pessoa extends Humano {

    constructor(protected weight: number, nome: string, sobrenome: string) {
        super(nome, sobrenome)
        this.weight = weight
    }

    get peso() {
        return this.weight;
    }

    dancar() {
        console.log('🕺🕺🕺🕺🕺🕺🕺');
    };
};

const hero = new Pessoa(74, 'Lucas', 'Silva');

hero.dancar()
hero.falar()
console.log(hero.peso)