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

function Person(name) {
    obj.name = name;
    obj.greeting = function() {
        return 'Eae, me chamo ' + obj.name + '!'
    };
};

let person1 = new Person('Lucas');
let person2 = new Person('Zé');