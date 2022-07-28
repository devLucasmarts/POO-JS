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
    return hero.getWeapon()
};

const useVillain = (villain) => {
    return villain.getWeapon()
};

console.log(useHero(hero));
console.log(useVillain(villain));
