//arrow functions

let add = (a: number = 0, b: number = 0): number => {
    return a * b;
}
console.log(add(10, 10))
add = (a: number = 0, b: number = 0): number => a * b;
console.log(add(10, 10))
