//pure function and immutablity

//pure function
// export function updateProfile(profile, city) {
//     //return new object
//     return {
//         id: profile.id,
//         name: profile.name,
//         city: city
//     }
// }

//pure function
// export function updateProfile(profile, city) {
//     //return new object
//     return Object.assign({}, profile, { city: city })
// }
//pure function
export function updateProfile(profile, city) {
    //return new object
    return { ...profile, city }
}
let profile = {
    id: 1,
    name: 'subramanian',
    city: 'Chennai'
}
let updatedProfile = updateProfile(profile, 'Coimbatore')
console.log("Same Object (profile===updatedProfile) ? =>", updatedProfile === profile);

