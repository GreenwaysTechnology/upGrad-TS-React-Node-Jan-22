//Union type

function Mode(varient: "dark" | "light") {
    console.log(varient)
}
Mode("dark")
Mode("light")

/**
 * error TS2345: Argument of type '"medium"' is not assignable to parameter of type '"dark" | "light"'.

8 Mode("medium")
       ~~~~~~~~
 */
//Mode("medium")

function Person(gender: "Male" | "Female" | "Third" | undefined, active: true | false) {
    console.log(gender, active)
}
Person("Female", true)


//mutli types
function PrintId(id: string | number | undefined) {
    console.log(id)
}
PrintId("1");
PrintId(1);
PrintId(undefined)

function PrintID(id: string | number) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id.toFixed());
    }

}
PrintID("abc")
PrintID(123.672)

