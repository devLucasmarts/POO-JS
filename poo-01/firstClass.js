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

//=================================

// Um pouco mais de complexidade

class Person {
    constructor(firstName, lastName, age, gender, height, interests) {

        this.name = {
            'firstName': firstName,
            'lastName': lastName
        };

        this.age = age;

        this.gender = gender;

        this.height = height;

        this.interests = interests;

        this.bio = function() {
            return `
            Hello World, my name is ${this.name.firstName} ${this.name.lastName}, I'm ${this.age}! My heigth is ${this.height}
            and I like things such as ${this.interests}`
        };
    };
};

let hero = new Person('Lucas', 'Silva', 21, 'male', '1.70', ['MMORPG', 'RPG', 'Cardgames', 'guitar', 'books', 'tec']);

console.log(hero.bio());
