interface Person {
    id: number;
    name: string;
    showIdentification(): void;
};

class PhysicalPerson implements Person {
    private static lastId = 0;
    private _name;
    private _id;
    private _cpf;

    constructor(name: string, cpf: string) {
        this._id = PhysicalPerson.newId();
        this._name = name;
        this._cpf = cpf;
    };

    private static newId() {
        return this.lastId++;
    };

    get id() { return this._id };

    get name() { return this._name };

    get cpf() { return this._cpf };

    showIdentification(): void {
        console.log(this.id, this._cpf);
    };
};

class LegalPerson implements Person {
    private static lastId = 0;
    private _name;
    private _id;
    private _cnpj;

    constructor(name: string, cnpj: string) {
        this._id = LegalPerson.newId();
        this._name = name;
        this._cnpj = cnpj;
    };

    private static newId() {
        return this.lastId++;
    };

    get id() { return this._id };

    get name() { return this._name };

    get cpf() { return this._cnpj };

    showIdentification(): void {
        console.log(this.id, this._cnpj);
    };
};

const person1 = new PhysicalPerson('Lucas', '866.301.930-08');
const person2 = new PhysicalPerson('Zé', '486.202.990-69');
const lp = new LegalPerson('International Sales SA', '54.437.418/0001-90');

const showIdentification = (person: Person) => {
    person.showIdentification();
};

showIdentification(person1);
showIdentification(person2);
showIdentification(lp);
