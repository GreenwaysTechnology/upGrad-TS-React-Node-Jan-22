/**
 * Types from Type
 * 
Creating Types from Types


Generics - Types which take parameters
Keyof Type Operator - Using the keyof operator to create new types
Typeof Type Operator - Using the typeof operator to create new types
Indexed Access Types - Using Type['a'] syntax to access a subset of a type
Conditional Types - Types which act like if statements in the type system
Mapped Types - Creating types by mapping each property in an existing type
Template Literal Types - Mapped types which change properties via template literal strings
 */

//Keyof Type Operator - Using the keyof operator to create new types

type User = {
    name: string;
    age: number;
};

type UserKey = keyof User;

function userList(list: UserKey) {
    console.log("list", list)
}
userList("name")
///
//The
//typeof type operator

let s = "hello";
let n: typeof s;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
// function f() {
//     return { x: 10, y: 3 };
// }
// type P = ReturnType<f>;

function f() {
    return { x: 10, y: "Hello", isvalid: true };
}
type P = ReturnType<typeof f>;

//Indexed Access Type

type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
type I1 = Person["age" | "name"];
type I2 = Person[keyof Person];
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];

//conditional Types
interface Animal {
    live(): void;
}
interface Dog extends Animal {
    woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;
