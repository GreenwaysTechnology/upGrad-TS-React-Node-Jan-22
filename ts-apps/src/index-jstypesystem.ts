//Java script Runtime types
let str = 'hello';
let a = 10;
let isValid = true;
let price; // undefined
let emp = null;
let today = new Date()  // object
let sayHello = function () {  // function
    return 'Hello'
}
let avg  =10/0 ; //infinity
let totalPrice = price * 100 //NaN

console.log(`Types`)
console.log(`str ${typeof str}`)
console.log(`a ${typeof a}`)
console.log(`isValid ${typeof isValid}`)
console.log(`price ${typeof price}`)
console.log(`emp ${typeof emp}`)
console.log(`today ${typeof today}`)
console.log(`sayHello ${typeof sayHello}`)
console.log(`avg ${typeof avg}`)
console.log(`totalPrice ${typeof totalPrice}`)