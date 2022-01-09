// //immpure function
// export function addItem(items) {
//     //add 
//     items.push(4); // push is impure
//     return items;
// }

// //pattern 1
// export function addItem(items) {
//     //items.push(4);
//     return items.concat(4);
// }

// //pattern 2
export function addItem(items) {
    return [...items, 4];
}
let items = [1, 2, 3];
console.log('Old Items => ', items);
let newItems = addItem(items)
console.log('new Items => ', newItems);

console.log("Same Object (oldItems===newItems) ? =>", items === newItems);