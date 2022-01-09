//declare decorator

function Course(target: any) {
    //decorator logic
    Object.defineProperty(target.prototype, "course", { value: 'React' })
}

interface StudentType {
    firstName: string;
    lastName: string;
    course: string
}

@Course
class Student {
    constructor(public firstName: string = "", public lastName: string = "") { }
}
//type corecion
//let student= new Student("Subramanian","Murugan") as StudentType
let student = new Student("Subramanian", "Murugan") as any

console.log(`${student.firstName} ${student.lastName} is learning ${student.course} `)