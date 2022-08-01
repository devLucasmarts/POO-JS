class Human {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    };


};

class Person extends Human {
    constructor(name, height, Clothes) {
        super(name, height)
        this.name = name;
        this.height = height;
        this.clothes = Clothes;
    }

    talk() {
        return 'Hey';
    };

    getPersonClothes() {
        return this.clothes;
    };
};

class Clothes {
    constructor(clothesList) {
        this.clothesList = clothesList
    };

};

const personClothes = new Clothes(['Camisa', 'Bermuda', 'Sapato']);

const hero = new Person('Lucas', 170, personClothes);

console.log(hero.getPersonClothes());