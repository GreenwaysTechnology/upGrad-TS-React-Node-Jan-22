//Object types

//class as a type
class Props {
    id: number;
    url: string;
    className?: string;
    target?: string;
    varient?: "dark" | "light" = "dark"
}

/**
 * - error TS2322: Type 'string' is not assignable to type 'number'.

12     id: "1",
       ~~

  src/index.ts:5:5
    5     id: number;
          ~~
    The expected type comes from property 'id' which is declared here on type 'Props'
 */
// let props :Props = {
//     id: "1",
//     url: 'http://wwww.example.com',
//     className: 'dark',
//     target: 'home'
// }

let props: Props = {
    id: 1,
    url: 'http://wwww.example.com',
    className: 'dark',
    target: 'home'
}

/**
 *  error TS2739: Type '{ id: number; url: string; }' is missing the following properties from type 'Props': className, target

37 let newProps :Props = {
       ~~~~~~~~

       Here ts not only sees the type of variable but also property existence.
       Ts forces us to have all properties
 */
// let newProps :Props = {
//     id: 1,
//     url: 'http://wwww.example.com'   
// }

//my req : only id and url : required propert and optional property
let newProps: Props = {
    id: 1,
    url: 'http://wwww.example.com',
    varient: "light"
}