//pure function and immutablity

//pure or not : Impure function
export function updateProfile(profile,city) {
    //update logic 
    profile.city = city;
    return profile
}
let profile = {
    id: 1,
    name: 'subramanian',
    city: 'Chennai'
}
let updatedProfile = updateProfile(profile,'Coimbatore')
console.log("Same Object (profile===updatedProfile) ? =>", updatedProfile === profile);