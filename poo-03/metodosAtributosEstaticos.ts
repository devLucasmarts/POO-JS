class Employee {
    private static employeeCount = 0;

    constructor(public name: string) {
        Employee.addEmployee();
    };

    private static addEmployee() {
        this.employeeCount += 1;
    };

    static get employees() {
        return this.employeeCount;
    };
};

console.log(Employee.employees);

const firstEmployee = new Employee('Lucas');

console.log(Employee.employees);

const secoundEmployee = new Employee('Zé');

console.log(Employee.employees);
