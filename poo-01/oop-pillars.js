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

    
}