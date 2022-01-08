//strong type : string,number,booleans
let firstName: string = "Subramanian"
let lastName: string = "Murugan";
let salary: number = 10000
let isValid: boolean = true;

//reinitalize the variables with different types

/**
 *  error TS2322: Type 'number' is not assignable to type 'string'.

11 firstName =100
   ~~~~~~~~~

[11:48:20 am] Found 1 error. Watching for file changes.
 */
//  firstName =100

console.log(firstName,lastName,salary,isValid)