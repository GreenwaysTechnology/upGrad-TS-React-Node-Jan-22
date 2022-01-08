//private : we cant access out side classes

class Auth {
    private password: string = "abcd000"

    private generatePassword() {
        return this.password;
    }
    public getPassword() {
        return this.generatePassword();
    }
}
let auth = new Auth()
/**
 *  Property 'password' is private and only accessible within class 'Auth'.

14 console.log(auth.password)
                    ~~~~~~~~
 */
// console.log(auth.password)
// console.log(auth.generatePassword())
console.log(auth.getPassword())
