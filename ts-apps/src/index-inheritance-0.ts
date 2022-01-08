//base class
class Account {
    constructor() {
        console.log('account class')
    }
    protected deposit() {
        return 10;
    }
}

class SavingsAccount extends Account {
    constructor() {
        super()
    }
    //overriding
    public deposit() {
        return 1000 * super.deposit();
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())