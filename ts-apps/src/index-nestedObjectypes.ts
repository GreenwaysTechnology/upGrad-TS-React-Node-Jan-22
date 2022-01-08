//

interface Person {
    id: number;
    name: string;
    address: {
        city: string
        state?: string
        country?: string
    } | null,
    status?: boolean
    gender?: 'Male' | 'Female' | 'Thrid'
}

let customer: Person = {
    id: 1,
    name: 'Ram',
    address: {
        city: 'Coimbatore'
    },
    gender: 'Male'
}