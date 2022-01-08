//Type inference

//a's type is infered to number
let a = 10;
console.log(a)
/**
 *  error TS2322: Type 'string' is not assignable to type 'number'.

7 a="test";
  ~
 */
//a="test";

let firstName = "Subramanian";
let isValid = true;
//explicit type declration
let lastName: string = "M"