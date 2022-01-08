//undefined

let a;
console.log(a)
a = 10
console.log(a)
a = "Hello"
console.log(a)

//explicit
let b:undefined
console.log(b);
/**
 * - error TS2322: Type '90' is not assignable to type 'undefined'.

13 b=90;
   ~

 */
//b=90;