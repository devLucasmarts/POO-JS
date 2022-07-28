abstract class Animal {
    constructor(public name: string) {};

    abstract move(): void;
};

class Bird extends Animal {
    move() {
        console.log(`${this.name} está voando!`);
    };
};

const louroJose = new Bird('Louro Jose');

louroJose.move();