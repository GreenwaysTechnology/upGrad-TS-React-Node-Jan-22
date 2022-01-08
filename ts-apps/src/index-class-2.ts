// class declaration

class Employee {
    //instance variables
    id: number
    name: string
    status: boolean
    constructor(id: number = 0, name: string = "", status = false) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    //instance methods
    calculate(): number {
        return 100;
    }
}
//emp is reference variable , new is keyword, Employee() constructor call
let emp = new Employee();
console.log(emp.id, emp.name, emp.status, emp.calculate())
emp = new Employee(1, 'ram', true);
console.log(emp.id, emp.name, emp.status, emp.calculate())