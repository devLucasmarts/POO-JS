class Human {
    constructor(characterClass, weapon) {
        this.characterClass = characterClass;
        this.weapon = weapon;
    };

    getWeapon() {};
};

class Jedi extends Human {

    getWeapon() { return `O ${this.characterClass} golpeou com o ${this.weapon}` };
};

class Sith extends Human {

    getWeapon() { return `O ${this.characterClass} arremessou o ${this.weapon}` };
};

const hero = new Jedi('Jedi', 'lightsaber');

const villain = new Sith('Darth Sith', 'lightsaber');

const useHero = (hero) => {
    return hero.getWeapon();
};

const useVillain = (villain) => {
    return villain.getWeapon();
};

console.log(useHero(hero));
console.log(useVillain(villain));

// ========================================

// Chamando o método da classe pai dentro da classe filha com o super()


class Human {
    constructor(characterClass, weapon) {
        this.characterClass = characterClass;
        this.weapon = weapon;
    };

    getWeapon() {};

    jump() { console.log(`O ${this.characterClass} saltou`) };
};

class Jedi extends Human {

    getWeapon() {
        super.jump()
        console.log(`O ${this.characterClass} golpeou com o ${this.weapon}`);
    };
};

const otherHero = new Jedi('Jedi', 'lightsaber');

otherHero.getWeapon();