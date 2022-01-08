// class declaration

class Employee {
    //instance variables
    id: number = 0;
    name: string = "name";
    status: boolean = false;
    //instance methods
    calculate(): number {
        return 100;
    }
}
//emp is reference variable , new is keyword, Employee() constructor call
let emp = new Employee();
console.log(emp.id,emp.name, emp.status,emp.calculate())
//after object creation
emp.id =1;
emp.name = 'Ram';
emp.status = true;
console.log(emp.id,emp.name, emp.status,emp.calculate())