class Person {
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

const p1 = new Person('Zé', 170, 70, 22);
p1.setAge(23);

console.log(p1.name, p1.height, p1.getWeight(), p1.getAge());
