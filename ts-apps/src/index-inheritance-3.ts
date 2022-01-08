abstract class Account {
    public getAccountInfo() {
        return 'AccountInfo'
    }
    abstract deposit():number;
    abstract withdraw():number;
}
class SavingsAccount extends Account {
    constructor() {
        super()
    }
    //overriding
    public deposit():number {
        return 1000
    }
    withdraw():number {
        return 300;
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit(),sb.withdraw(),sb.getAccountInfo())