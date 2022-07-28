class Human {
    constructor(characterClass, weapon) {
        this.characterClass = characterClass;
        this.weapon = weapon;
    };

    getWeapon() { return `O ${this.characterClass} equipou o(a) ${this.weapon}`};
};

class Jedi extends Human {

    getWeapon() { return `O ${this.characterClass} golpeou com o ${this.weapon}` };

};

const hero = new Jedi('Jedi', 'lightsaber');

const useHero = (hero) => {
    return hero.getWeapon()
};

console.log(useHero(hero));
