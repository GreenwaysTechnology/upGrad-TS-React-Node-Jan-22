// null and property property

let emp = null;

if (emp) {
    console.log(emp.id)
} else {
}
//using tenary
emp ? console.log(emp.id) : "";

//typescript safe navigation operator ; with undefined
console.log(emp?.id)
//safe navigation operator with default value
console.log(emp?.id ? emp.id : 0)

//elivish operator??
console.log(emp?.id ?? 0)