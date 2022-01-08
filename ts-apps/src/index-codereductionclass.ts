//how to reduce class declaration code

//regular class declaration
class Employee__ {
    //instance variables
    public id: number // explicit public
    public name: string
    public status: boolean
    constructor(id: number = 0, name: string = "", status = false) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    //instance methods
    public calculate(): number {
        return 100;
    }
}

class Employee {
    //id: number = 0, name: string = "", status = false - local variables
    //ts provides an option that , we can convert local variables into instance variables
    //by adding public/private keywords
    // constructor(public id: number = 0, public name: string = "", public status = false) {
    //     this.id = id;
    //     this.name = name;
    //     this.status = status;
    // }
    constructor(public id: number = 0, public name: string = "", public status = false) { }
    //instance methods
    public calculate(): number {
        return 100;
    }
}


//emp is reference variable , new is keyword, Employee() constructor call
let emp = new Employee();
console.log(emp.id, emp.name, emp.status, emp.calculate())
emp = new Employee(1, 'ram', true);
console.log(emp.id, emp.name, emp.status, emp.calculate())