// Modo 'prolixo'

function createNewPerson(name) {
    var obj = {};

    obj.name = name;
    obj.greeting = function() {
        return 'Eae, me chamo ' + obj.name + '!'
    };

    return obj;
};

let lucas = createNewPerson('Lucas');
console.log(lucas.name);
console.log(lucas.greeting());

// ============================

// Modo otimizado - Função Construtora

class Person {
    constructor(name) {
        this.name = name;
        this.greeting = function () {
            return 'Eae, me chamo ' + this.name + '!';
        };
    }
};

let person1 = new Person('Lucas');
let person2 = new Person('Zé');

console.log(person1.name);
console.log(person1.greeting());

console.log(person2.name);
console.log(person2.greeting());