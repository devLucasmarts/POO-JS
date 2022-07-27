class Human {
    constructor(name, height, weight, age) {
        this.name = name;
        this.height = height;
        this._age = age;
        this._weight = weight;
    };

    getWeight() {
        return this._weight;
    };

    getAge() {
        return this._age;
    };

    setAge(newAge) {
        if (newAge >= 0 && newAge < 200) {
            this._age = newAge;
        };
    };
};

class Warrior extends Human {

    constructor(strength, armor, shield, name, height, weight, age,) {
        super(name, height, weight, age)
        this.strength = strength;
        this.armor = armor;
        this.shield = shield;
    };


    useSword() {
        console.log(`O guerreiro ${this.name} usou a espada! 🤺`);
    };

    useArmor() {
        console.log(`O guerreiro ${this.name} está equipado com ${this.armor} 🪖`);
    };

    useShield() {
        console.log(`O guerreiro ${this.name} equipou um ${this.shield} 🛡️`)
    }

};

const warrior = new Warrior(20, 'placas', 'escudo de aço', 'Lucas', 170, 75, 22);

warrior.useSword();
warrior.useArmor();
warrior.useShield();
console.log(warrior.strength);
console.log(warrior.height);
console.log(warrior.getWeight());
console.log(warrior.getAge());
