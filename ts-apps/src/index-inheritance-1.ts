interface Account {
    deposit(amount: number): number
}
interface Calculator {
    calculate(amount: number): number
}

class SavingsAccount implements Account, Calculator {
    constructor() {
    }
    calculate(amount: number): number {
        return amount * 10
    }
    //overriding
    public deposit(): number {
        return 1000;
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit(),sb.calculate(111))