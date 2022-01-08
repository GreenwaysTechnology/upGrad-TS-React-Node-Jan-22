//functions

function sayHello() {
    return 'hello'
}
console.log(sayHello());

//function literal syntax
let hai = function () {
    return "hai"
};
console.log(hai());

//parameters and args
//Here the variable "name" must have type atleast "any" explicityly or not  implicit any
//no type is considered "implicit any";

// function sayGreetV1(name:any) {
//     return `Greet ${name}`
// }
function sayGreetV1(name: any) {
    return `Greet ${name}`
}
//
console.log(sayGreetV1('Subramanian'))
console.log(sayGreetV1(100))

//function arg type

function sayGreetV2(name: string) {
    return `Greet ${name}`
}
//
console.log(sayGreetV2('Subramanian'))
// console.log(sayGreetV2(100))
//////////////////////////////////////////////////////////////////////////////////////
//default args : es 6 feature
function add(a: number = 0, b: number = 0) {
    return a + b;
}
console.log(add(10, 20))
//skipping values
console.log(add())

//Extra feature similar to default args : Optinal Args

function multiply(a?: number, b?: number) {
    return a * b;
}
console.log(multiply(10, 20))
//skipping values
console.log('res',multiply())







