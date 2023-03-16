// const farhanAccount = new BankAccount("farhan")


class BankAccount{

    name;
    balance;
    accountNumber;

    constructor(name , balance = 0){

        this.name = name,
        this.balance = balance,
        this.accountNumber = Date.now()

    }

    deposit(num){
        this.balance += num
    }

    withdraw(num){
        this.balance -= num
    }

}



// const farhanAccount = new BankAccount("farhan")

// farhanAccount.deposit(10000000)
// farhanAccount.withdraw(100000)

// console.log(farhanAccount)


// Hoisting
// someFunc()

// function someFunc(){
//     console.log(123)
// }
