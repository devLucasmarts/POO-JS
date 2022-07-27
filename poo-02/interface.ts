interface Human {
    name: string;
    age: number;

    talk(): any;
};

class Hero implements Human {
    constructor(public name: string, private heroAge: number) {}    

    get age() {
        return this.heroAge;
    };

    talk() {
        console.log("Hey");
    };

};

const me = new Hero('Lucas', 22)
console.log(me.age)
me.talk()
