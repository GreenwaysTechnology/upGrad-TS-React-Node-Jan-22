//arrow functions
let add = (a = 0, b = 0) => {
    return a * b;
};
console.log(add(10, 10));
add = (a = 0, b = 0) => a * b;
console.log(add(10, 10));
