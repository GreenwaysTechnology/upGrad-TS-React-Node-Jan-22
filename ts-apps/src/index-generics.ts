//array

//here array can accept any type of value
// let list = [1, 2, 3, "hello", true];

//array should hold only numbers
let list: Array<number> = [1, 2, 3];

//custom generics: generic function 

// function accept(item:string){
//    console.log(item);
// }
//Generics Notation
function accept<T>(item: T) {
    console.log(item);
}
accept<string>("Hell0")
// accept<string>(12)

function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

// myNumArr.push("Hi"); // Compiler Error
// myStrArr.push(500); // Compiler Error
//
//multiple args

function displayType<T, U>(id: T, name: U): void {
    console.log(typeof (id) + ", " + typeof (name));
}

displayType<number, string>(1, "Steve"); // number, string

///////////////////////////////////////////////////////////////////////////////////

class Person {
    firstName: string;
    lastName: string;

    constructor(fname:string,  lname:string) { 
        this.firstName = fname;
        this.lastName = lname;
    }
}

//T can accept only type of Person only

function display<T extends Person>(per: T): void {
    console.log(`${ per.firstName} ${per.lastName}` );
}
var per = new Person("Bill", "Gates");
display(per); //Output: Bill Gates

// display("Bill Gates");//Compiler Error