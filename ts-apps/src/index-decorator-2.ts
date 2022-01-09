//declare decorator

function Course(subject: any) {
    return function (target: any) {
        //decorator logic
        Object.defineProperty(target.prototype, "course", { value: subject })
    }
}

@Course({ name: 'MicroServices', duration: '24hrs' })
class Student  {
    constructor(public firstName: string = "", public lastName: string = "") { }
}


@Course({ name: 'React', duration: '24hrs' })
class Student1 {
    constructor(public firstName: string = "", public lastName: string = "") { }
}

//type corecion
//let student= new Student("Subramanian","Murugan") as StudentType
let student = new Student("Subramanian", "Murugan") as any
console.log(`${student.firstName} ${student.lastName} is learning ${student.course.name} in ${student.course.duration} `)