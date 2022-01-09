//immpure function for adding new prop on existing object
// export function addNewPower(person) {
//     //add new property
//     person.specialPower = 'invisibility';
//     return person;
// }

//pure function for adding new prop on existing object
export function addNewPower(person) {
    // return {
    //     firstName: person.firstName,
    //     lastName: person.lastName,
    //     address: {
    //         street: person.address.street,
    //         city: person.address.city,
    //         state: person.address.state
    //     },
    //     specialPower: 'invisibility'
    // };
    // return Object.assign({}, person, { specialPower: 'invisibility' })
    return {
        ...person, specialPower: 'invisibility'
    }

}

let person = {
    firstName: 'Subramanian',
    lastName: 'Murugan',
    address: {
        street: '10 th street',
        city: 'Coimbatore',
        state: 'TN'
    }
};
console.log('old Person', person);

let newPerson = addNewPower(person);

console.log('new Person', newPerson);

console.log("Same Object (person===newPerson) ? =>", person === newPerson);